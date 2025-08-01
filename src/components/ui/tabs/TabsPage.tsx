'use client'
import { ReactNode, type JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Tabs, TabsList, TabsTrigger, type Section } from '.';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function getCurrentPathname(pathname: string, root: string) {
    const parts = pathname.split('/');
    const last = parts.pop() || '';
    return (last === root) ? '' : last;
}
function MovePageButton({ sections, dir, pathname, root, router, prefix }: {
    dir: 'forwards' | 'backwards', sections: Section[],
    pathname: string, root: string,
    router: AppRouterInstance, prefix: string
}): JSX.Element {


    const bound: (index: number) => boolean = (index: number) => {
        return dir === 'forwards'
            ? index === sections.length - 1
            : index === 0;
    }

    const onClick: () => void = () => {
        const index = sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)) + (dir === 'backwards' ? -1 : 1);
        if (dir === 'backwards' && index >= 0 || dir === 'forwards' && index < sections.length - 1) {
            router.push(`/${prefix}/${sections[index].route}`)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const disabled: boolean = bound(sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)));

    const label: string = dir === 'forwards' ? 'הבא' : 'הקודם';

    const textColor: string[] = dir === 'forwards'
        ? ['bg-blue-300', 'bg-blue-900 hover:bg-blue-600']
        : ['bg-red-300', 'bg-red-900 hover:bg-red-600'];


    return (
        <button
            className={clsx('flex flex-none p-5 rounded-3xl border-4 border-black',
                bound(sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)))
                    ? textColor[0]
                    : textColor[1]
            )}
            disabled={disabled}
            onClick={onClick}> {label}</button>
    )
}

export default function TabsPage({ prefix, sections, root, children }: { prefix: string, root: string, sections: Section[], children: ReactNode }): JSX.Element {
    const router = useRouter();
    const pathname = usePathname();
    const currentTab = getCurrentPathname(pathname, root);

    return (
        <div className="min-h-screen max-w-screen flex flex-col">
            <Tabs value={currentTab} className="w-full overflow-x-auto scroll-smooth bg-gradient-to-tl from-blue-700 via-green-950 to-purple-500 mx-auto py-6 border-b-4 border-sky-500">
                <div className="relative">
                    <div className=" transition-all duration-300 px-2">
                        <TabsList className="flex w-max gap-4">
                            {sections.map((section: Section, id: number) => (
                                <TabsTrigger
                                    key={id}
                                    value={section.label}
                                    onClick={() => {
                                        console.log(`/${prefix}/${section.route}`)
                                        console.log(section.route)
                                        console.log(getCurrentPathname(pathname, root))
                                        return router.push(`/${prefix}/${section.route}`)
                                    }}
                                    className={clsx(
                                        'flex items-center gap-2 whitespace-nowrap px-3 py-2',
                                        getCurrentPathname(pathname, root) === section.route && 'bg-sky-500'
                                    )}>
                                    {section.icon}
                                    {section.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </div>
            </Tabs >

            <div className="relative flex-1 flex items-center justify-center px-4 ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                        className="min-w-full min-h-full"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className='flex flex-row w-full px-20 mt-10'>
                <MovePageButton dir='backwards' sections={sections} pathname={pathname} root={root} router={router} prefix={prefix} />
                <div className='flex flex-grow' />
                <MovePageButton dir='forwards' sections={sections} pathname={pathname} root={root} router={router} prefix={prefix} />
            </div>
        </div >
    );
}
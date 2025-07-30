'use client'
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Tabs, TabsList, TabsTrigger, type Section } from '.';

function getCurrentPathname(pathname: string, root: string) {
    const parts = pathname.split('/');
    const last = parts.pop() || '';
    return (last === root) ? '' : last;
}

export default function TabsPage({ prefix, sections, root, children }: { prefix: string, root: string, sections: Section[], children: ReactNode }) {
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
                <button
                    className={clsx('flex flex-none p-5 rounded-3xl border-4 border-black',
                        sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)) === 0
                            ? 'bg-red-300'
                            : 'bg-red-900 hover:bg-red-600'
                    )}
                    disabled={sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)) === 0}
                    onClick={() => {
                        const index = sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)) - 1;
                        if (index >= 0) {
                            router.push(`/${prefix}/${sections[index].route}`)
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}> הקודם </button>
                <div className='flex flex-grow' />
                <button
                    className={clsx('flex flex-none p-5 rounded-3xl border-4 border-black',
                        sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)) === sections.length
                            ? 'bg-blue-300'
                            : 'bg-blue-900 hover:bg-blue-600')
                    }
                    onClick={() => {
                        const index = sections.findIndex((s) => s.route === getCurrentPathname(pathname, root)) + 1;
                        if (index < sections.length) {
                            router.push(`/${prefix}/${sections[index].route}`)
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}> הבא </button>
            </div>
        </div >
    );
}
import { UIdGenerator } from "@/libs/generators";
import { ALL_NAVIGATION_OPTIONS } from "@/navs";
import type { JSX, ReactNode } from "react";
import { DropdownButton, NavButton } from "@/components/ui/buttons/navbar";

export default function Sidebar({ children }: { children?: ReactNode }): JSX.Element {
    return (
        <aside className="w-60 bg-gray-800 text-white p-4 space-y-2">
            {ALL_NAVIGATION_OPTIONS.map((op) => {
                const isDropdown = !!op.children;
                return (
                    <div key={UIdGenerator.generate()} className={'select-none'}>
                        {isDropdown ? <DropdownButton op={op} /> : <NavButton op={op} />}
                    </div>
                )
            })}
        </aside>
    )
}
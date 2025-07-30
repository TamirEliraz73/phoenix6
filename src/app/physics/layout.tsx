import { TabsPage, type Section } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";
import type { JSX } from "react";
import { RiFormula } from "react-icons/ri";

const sections: Section[] = [
    { route: '', label: 'הקדמה', icon: <BookOpen className="w-4 h-4" /> },
    { route: '/formulas', label: 'נוסחאות', icon: <RiFormula className="w-4 h-4" /> }
]

export default function PhysicsLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <TabsPage sections={sections} prefix="physics" root="physics">{children}</TabsPage>
    )
}
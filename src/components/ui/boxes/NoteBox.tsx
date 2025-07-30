import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type { JSX, ReactNode } from "react";

export interface NoteBoxProps {
    type?: "info" | "warning" | "tip";
    title?: string;
    children: ReactNode;
}

export default function NoteBox({ type = "info", title, children }: NoteBoxProps): JSX.Element {
    const styles = {
        info: {
            icon: <Info className="w-5 h-5 text-blue-600" />,
            border: "border-blue-300",
            bg: "transparent",
            title: title || "קצת הגדרות...",
            titleColor: "text-blue-300"
        },
        warning: {
            icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
            border: "border-red-300",
            bg: "transparent",
            title: title || "אזהרה",
            titleColor: "text-red-300"
        },
        tip: {
            icon: <Lightbulb className="w-5 h-5 text-yellow-600" />,
            border: "border-yellow-300",
            bg: "transparent",
            title: title || "טיפ!",
            titleColor: "text-yellow-300"
        },
    }[type];

    return (
        <div className={`border-2 ${styles.border} rounded-xl ${styles.bg} p-4 mx-8 font-bold my-4 font-sans`}>
            <div className="flex items-center gap-2 mb-2">
                {styles.icon}
                <h3 className={`text-lg font-bold underline ${styles.titleColor}`}>{styles.title}</h3>
            </div>
            <div className=" leading-relaxed pe-2">
                {children}
            </div>
        </div>
    );
}
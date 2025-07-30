import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip"
import { UIdGenerator } from "@/libs/generators"

const HEADERS = [
    { label: 'מש', tooltip: 'מספר משחקים' },
    { label: 'נצ', tooltip: 'נצחונות' },
    { label: 'תק', tooltip: 'תיקו' },
    { label: 'הפ', tooltip: 'הפסדים' },
    { label: 'זכ', tooltip: 'שערי זכות' },
    { label: 'חו', tooltip: 'שערי חובה' },
    { label: '+/–', tooltip: 'הפרש שערים (זכות פחות חובה)' },
    { label: 'נק׳', tooltip: 'סך נקודות (נצחון = 3, תיקו = 1)' }
]

export default function FootballTableHeader() {
    return (
        <thead className="sticky top-0 bg-neutral-900/90 backdrop-blur border-b border-neutral-800 text-neutral-300 text-xs uppercase tracking-wider z-10">
            <tr>
                <th className="px-4 py-3 text-right">#</th>
                <th className="px-2 py-3 text-center">קבוצה</th>
                {HEADERS.map((header, i) => (
                    <th key={UIdGenerator.generate()} className="px-2 py-3 text-center">
                        <Tooltip>
                            <TooltipTrigger className="inline-flex items-center gap-1">
                                <span>{header.label}</span>
                                <Info className="w-3 h-3 text-neutral-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>{header.tooltip}</span>
                            </TooltipContent>
                        </Tooltip>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

import { UIdGenerator } from "@/libs/generators"
import type { JSX } from "react"

export default function Examples({ values, withTitle = true }: {
    values: { hebrew: string, english: string, example: any }[],
    withTitle?: boolean
}): JSX.Element {
    return (
        <div className={'flex flex-col pt-3'}>
            {withTitle && <div className={'text-start text-2xl font-bold ps-2 text-green-600'}>
                דוגמאות נפוצות:
            </div>}
            <div className="overflow-x-auto mt-6 text-lx">
                <table className="min-w-full border border-gray-300 text-center text-gray-300">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">שם בעברית</th>
                            <th className="px-4 py-2 border border-gray-300">דוגמאות</th>
                            <th className="px-4 py-2 border border-gray-300">שם באנגלית</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((item, i) => (
                            <tr key={UIdGenerator.generate()}
                                className={`${(i % 2) === 0 ? 'bg-purple-900' : 'bg-purple-800'} hover:bg-purple-950`}>
                                <td className="px-4 py-2 border border-gray-300">{item.hebrew}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.example}</td>
                                <td className="px-4 py-2 border border-gray-300 whitespace-nowrap font-mono">{item.english}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
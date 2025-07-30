'use client'
import { useState, type JSX } from "react";

export interface DataTableProps {
    columns: string[];
    data: (string | number | JSX.Element)[][];
    maxVisibleRows?: number;
}

export default function DataTable({ columns, data, maxVisibleRows = 10 }: DataTableProps) {
    const [showAll, setShowAll] = useState(false);

    const visibleData = showAll ? data : data.slice(0, maxVisibleRows);
    const hasMore = data.length > maxVisibleRows;

    return (
        <div dir={'ltr'} className="overflow-x-auto border rounded-lg shadow-md text-center mx-10">
            <table className="min-w-full border-collapse text-sm">
                <thead className="bg-gray-800 text-gray-100 text">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-4 py-2 border-b">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((row, idx) => (
                        <tr key={idx} className="odd:bg-gray-500 even:bg-gray-600 hover:bg-gray-700 hover:text-yellow-400">
                            {row.map((cell, cidx) => (
                                <td key={cidx} className="px-4 py-2 border-b hover:text-yellow-500">{cell}</td>
                            ))}
                        </tr>
                    ))}
                    {!showAll && hasMore && (
                        <tr className="text-center text-gray-500">
                            <td colSpan={columns.length} className="py-2 cursor-pointer hover:underline"
                                onClick={() => setShowAll(true)}>
                                ... הצג הכל
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
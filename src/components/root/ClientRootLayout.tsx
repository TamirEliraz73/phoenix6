'use client'
import type { JSX, ReactNode } from "react";
import { Footer, Header, Sidebar } from ".";

export default function ClientRootLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <Header />
            <div className="flex flex-1 mt-12">
                {/* Sidebar */}
                <Sidebar />

                {/* Main area */}
                <div className="flex flex-col flex-1 min-w-0 bg-gradient-to-br from-[#1e1e2f] via-[#2e2e4d] to-[#1e1e2f] text-white">
                    <main className="flex-1 overflow-auto pb-10">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
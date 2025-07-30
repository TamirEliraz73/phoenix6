'use client'

import { ReactNode } from 'react';
import { BookOpen, Brain, Dices } from 'lucide-react';
import { TabsPage, type Section } from '@/components/ui/tabs';

const sections: Section[] = [
    { route: '', label: 'הקדמה', icon: <BookOpen className="w-4 h-4" /> },
    { route: 'details', label: 'למידה מפוקחת', icon: <Brain className="w-4 h-4" /> },
    { route: 'd2', label: 'למידה לא מפוקחת', icon: <Brain className="w-4 h-4" /> },
    { route: 'probability', label: 'הסתברות', icon: <Dices className="w-4 h-4" /> },
];

export default function AIIntroLayout({ children }: { children: ReactNode }) {
    return (
        <TabsPage sections={sections} prefix='ai/intro' root='intro'>{children}</TabsPage>
    );
}
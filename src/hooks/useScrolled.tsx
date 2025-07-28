'use client'
import { useEffect, useState } from "react";

export default function useScrolled(threshold: number = 10): boolean {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // לקרוא מיידית על טעינה (אם כבר גללו)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
}
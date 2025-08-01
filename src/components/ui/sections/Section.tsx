'use client'
import { AnimatePresence, motion } from "framer-motion";
import { Triangle } from "lucide-react";
import { useState, type JSX } from "react";

export default function Section({ SHeader, SInner }:
    { SHeader: JSX.Element, SInner: JSX.Element }
): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <motion.div
                className="flex items-center cursor-pointer"
                onClick={handleToggle}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
            >

                <motion.div
                    animate={{ rotate: isOpen ? 60 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Triangle className="w-4 h-4" />
                </motion.div>

                <motion.div
                    animate={{ x: isOpen ? 4 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    className="ms-2"
                >
                    {SHeader}
                </motion.div>
            </motion.div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ overflow: 'hidden' }}
                    >

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -30, opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="pl-6 border-s border-gray-300"
                        >
                            {SInner}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
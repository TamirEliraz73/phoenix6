'use client'

// import FootballNextMatch from "@/components/football/next_match/FootballNextMatch";
// import FootballTable from "@/components/football/table/FootballTable";
// import { ChampionsLeague } from "@/libs/football/instances";
import { motion } from "framer-motion";

export default function FootballChampionsLeaguePage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.05, 1],
                    rotate: [0, -1, 1, 0],
                }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror',
                }}
                className="text-[6vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-yellow-800 to-green-800 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            >
                בקרוב!
            </motion.h1>
        </div>
    )
    // <div className="flex flex-col gap-10 my-10 mx-5">
    //     <div className="flex flex-row gap-5">
    //         <FootballNextMatch page="2025–26_FC_Barcelona_season" section={21} />
    //         <FootballNextMatch page="2025–26_Real_Madrid_CF_season" section={14} />
    //     </div>
    //     <FootballTable page="Template:2025–26_La_Liga_table" league={ChampionsLeague} />
    // </div>
}
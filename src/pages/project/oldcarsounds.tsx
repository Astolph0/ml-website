import Watermark from "@/components/Watermark";
import Head from "next/head";
import { motion } from "framer-motion";
import Script from "next/script";
import {CSSProperties} from "react";

const itemStyle: CSSProperties = {
    width: 'calc(100% - 45px)'
}

export default function OldTruckSounds() {
    return (
        <>
            <Head>
                <title>OldCarSounds | mldkyt.com</title>
                <meta name="title" content="OldCarSounds | mldkyt's website" />
                <meta name="description" content="Changes Satsuma's sounds for the old ones." />
                <meta name="author" content="mldkyt" />
                <Script async src={process.env.ADS_URL} crossOrigin="anonymous"></Script>
            </Head>
            <br />
            <h1 className="text-3xl font-bold mx-2">OldCarSounds</h1>
            <p className="mx-6">
                This mod changes the car sounds in My Summer Car to their pre-release or release versions. With this mod, you can bring a touch of nostalgia to your gameplay by experiencing the sounds of My Summer Car's early days.
            </p>
            <h2 className="text-xl font-bold mx-4">How to use</h2>
            <p className="mx-6">
                To use this mod, you will need the MSCLoader mod loader. Simply download and install the mod using the MSCLoader and start your game. Once in-game, you can select between the pre-release and release versions of the car sounds from the mod menu in the MSCLoader.
            </p>
            <h2 className="text-xl font-bold mx-4">Features (pre-release):</h2>
            <p className="mx-6">&bull; Disables door, knob, and foot sounds.</p>
            <p className="mx-6">&bull; Adds an information text in the left top corner.</p>
            <p className="mx-6">&bull; Changes the dashboard to the old version.</p>
            <p className="mx-6">&bull; Changes the car sounds to the pre-release versions.</p>
            <p className="mx-6">&bull; Adds assemble sounds.</p>
            <p className="mx-6">&bull; Adds shift delay.</p>
            <h2 className="text-xl font-bold mx-4">Features (release):</h2>
            <p className="mx-6">&bull; Changes the car sounds to the release versions.</p>
            <p style={itemStyle} className="m-2 rounded-lg border-2 border-red-500 px-2 py-1 text-white">This mod is not compatible with any other mods that affect the car sounds in My Summer Car. Please make sure to remove any conflicting mods before using this mod.</p>
            <br />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-max">
                <a href="https://www.nexusmods.com/mysummercar/mods/464" className="m-2 px-2 py-1 rounded-lg border-white border-2">Go to NexusMods page</a>
            </motion.div>
            <Watermark />
        </>
    )
}
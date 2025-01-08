import React from "react";
import GalleryWithSwiper from "./GalleryWithSwiper";
import { AnimatePresence, motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="font-sans min-h-screen relative overflow-hidden"
      >
        {/* Spline 3D Scene as Background */}
        <div className="absolute inset-0 z-0">
          <Spline
            scene="https://prod.spline.design/N9boHuqc55L6Uvoc/scene.splinecode"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center py-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
            Portfolio
          </h1>
        </div>

        {/* Gallery Section */}
        <main className="px-4 sm:px-8 relative z-10">
          <GalleryWithSwiper />
        </main>

        {/* Floating Decorative Icons */}
        <svg
          className="absolute top-10 left-10 w-16 h-16 text-blue-500 opacity-20 animate-spin-slow"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M96 512l320-240L96 32v480z" />
        </svg>
        <svg
          className="absolute bottom-20 right-20 w-20 h-20 text-pink-500 opacity-20 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M437.5 74.5C388.1 25.1 323.7 0 256 0S123.9 25.1 74.5 74.5C25.1 123.9 0 188.3 0 256s25.1 132.1 74.5 181.5C123.9 486.9 188.3 512 256 512s132.1-25.1 181.5-74.5C486.9 388.1 512 323.7 512 256S486.9 123.9 437.5 74.5z" />
        </svg>
        <svg
          className="absolute top-1/4 right-10 w-12 h-12 text-green-500 opacity-25 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 320a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112z" />
        </svg>
        <svg
          className="absolute bottom-10 left-1/4 w-14 h-14 text-yellow-500 opacity-30 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M440.8 437.2c-70.7 70.7-185.6 70.7-256.3 0-70.7-70.7-70.7-185.6 0-256.3 70.7-70.7 185.6-70.7 256.3 0 70.7 70.7 70.7 185.6 0 256.3zm-50.9-50.9c-52.7 52.7-138.2 52.7-190.9 0-52.7-52.7-52.7-138.2 0-190.9 52.7-52.7 138.2-52.7 190.9 0 52.7 52.7 52.7 138.2 0 190.9z" />
        </svg>
        <svg
          className="absolute top-2/3 right-1/3 w-10 h-10 text-purple-600 opacity-25 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.3 0-200-89.7-200-200S145.7 56 256 56s200 89.7 200 200-89.7 200-200 200z" />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

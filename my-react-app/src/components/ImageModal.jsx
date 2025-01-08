import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ReactPlayer from "react-player";

const ImageModal = ({ media, onClose, isVideo }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-6 max-w-2xl relative"
      >
        <div className="relative">
          {/* Video-specific Close Icon */}
          {isVideo ? (
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none z-10"
              title="Close Video"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          ) : (
            // Default Close Button for Images
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          )}
          {isVideo ? (
            <div className="w-full aspect-video relative">
              <ReactPlayer
                url={media.url}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          ) : (
            <img
              src={media.src}
              alt={media.title}
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          <h2 className="text-2xl font-bold mt-4">{media.title}</h2>
          <p className="text-gray-700 mt-2">{media.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;

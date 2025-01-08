// import React, { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import ImageModal from "./ImageModal";
// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";

// const media = {
//   images: [
//     {
//       id: 1,
//       src: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe522837b-ed3b-4098-a071-57bbd130297c_6069x4368.png",
//       title: "7 layer PCB with ESP C3",
//       description: "7 layer PCB with ESP C3 with 4 mosfet and BMS",
//     },
//     {
//       id: 2,
//       src: "https://th.bing.com/th/id/R.25e8b508ef521250ec85b732095cb650?rik=1XTzwdngkzr4hw&riu=http%3a%2f%2fiotboys.com%2fwp-content%2fuploads%2f2018%2f04%2fESP8266-10-DIY-Development-Boards-for-IoT-in-2018.jpg&ehk=wHKgVqCnC78nxzdiEsMU5rfhW8h9EhiSyQwVksBwBsQ%3d&risl=&pid=ImgRaw&r=0",
//       title: "IOT Control Board",
//       description: "IOT Control Board",
//     },
//     {
//       id: 3,
//       src: "https://img.freepik.com/free-photo/composition-with-digital-tablet-electrician-work-items_169016-24255.jpg?t=st=1736312670~exp=1736316270~hmac=b17e7cceae6dae3026b6b040a88ca98e3f693fbd4e65dd2398e215c9b99e46a8&w=1060",
//       title: "Battery Capacity Tester",
//       description: "Battery Capacity Tester",
//     },
//     {
//       id: 4,
//       src: "https://th.bing.com/th/id/OIP.TMP0W0rOjUF41Cz52y1i2QHaE8?rs=1&pid=ImgDetMain",
//       title: "Flexible PCB ESP and BMS",
//       description: "Flexible PCB ESP and BMS with MOSFET control",
//     },
//     {
//       id: 5,
//       src: "https://th.bing.com/th/id/OIP.vA_OL7-WB3Pl6q08ofBxuQHaFj?rs=1&pid=ImgDetMain",
//       title: "3D printer control board",
//       description: "3D printer control board based on ESP32",
//     },
//     {
//       id: 6,
//       src: "https://www.3dsourced.com/wp-content/uploads/2023/03/SKR-Mini-E3-V3.jpg",
//       title: "16mm size, ESP + 9 axis IMU",
//       description: "16mm size, ESP + 9 axis IMU",
//     },
//     {
//       id: 7,
//       src: "https://th.bing.com/th/id/OIP.Y8h0VAja797i6z4xowlg0gHaHa?rs=1&pid=ImgDetMain",
//       title: "Lidar Rover",
//       description: "Lidar Rover with Automatic Navigation",
//     },
//     {
//       id: 8,
//       src: "https://image.easyeda.com/pullimage/6nhWfKJW1YBGSIbEoyYpVf2cuxWyFqTmdB2lfZ1m.jpeg",
//       title: "SENTSOR CORE ESP32-MICRO",
//       description: "SENTSOR CORE ESP32-MICRO - Development Board",
//     },
//     {
//       id: 9,
//       src: "https://th.bing.com/th/id/OIP.qo-Iu1LevLe7B2anokVChgHaFJ?rs=1&pid=ImgDetMain",
//       title: "ESP base Drone Development",
//       description: "ESP base Drone Development",
//     },
//     {
//       id: 10,
//       src: "https://th.bing.com/th/id/OIP.qe4m1UjoHo3hPlit8YtwhwAAAA?rs=1&pid=ImgDetMain",
//       title: "Attiny Game pad",
//       description: "Attiny Game pad",
//     },
//     {
//       id: 11,
//       src: "https://th.bing.com/th/id/OIP.etcp7ZemTY5Sa_6ar2c_2AHaHa?rs=1&pid=ImgDetMain",
//       title: "Wireless Weather Station",
//       description: "Wireless Weather Station",
//     },
//     {
//       id: 12,
//       src: "https://th.bing.com/th?id=OIF.pWkFWBZxaq%2bZQTFCL%2f1nGQ&rs=1&pid=ImgDetMain",
//       title: "Matrix Power Control",
//       description: "Matrix Power Control",
//     },
//     {
//       id: 13,
//       src: "https://th.bing.com/th/id/OIP.vwjgqhWIbuQahatneWRTrQHaE8?rs=1&pid=ImgDetMain",
//       title: "Custom 3D design",
//       description: "Custom 3D design according to the customer requirements",
//     },
//     {
//       id: 14,
//       src: "https://th.bing.com/th/id/OIP.KIxAFk4j3WCayrQJs36oJwHaFj?rs=1&pid=ImgDetMain",
//       title: "Autonomous driving rover development",
//       description:
//         "Autonomous driving rover development with Visual base obstacle avoiding",
//     },
//   ],
//   videos: [
//     {
//       id: 1,
//       url: "https://youtu.be/yqFfmwVufMo?si=lraj2o5mtvdopWOf",
//       title: "9 axis IMU with ESP C3",
//       description: "9 axis IMU with ESP C3",
//     },
//     {
//       id: 2,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "Connecting IMU as a Mesh network",
//       description: "Connecting IMU as a Mesh network, Full wireless system",
//     },
//     {
//       id: 3,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "Pick and Place Robotic Arm",
//       description: "Pick and Place Robotic Arm with Identification",
//     },
//     {
//       id: 4,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "Full autonomous rover development",
//       description:
//         "Full autonomous rover development with 3d stereo vision camera technology",
//     },
//     {
//       id: 5,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "Smart IOT plug development",
//       description: "Smart IOT plug development",
//     },
//     {
//       id: 6,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "Tea and Coconut sprayer drone 22l",
//       description: "Tea and Coconut sprayer drone 22l",
//     },
//     {
//       id: 7,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "3 Axis Gimble mapping drone",
//       description:
//         "3 Axis Gimble mapping drone with 50K image 3d strachteral design development with cm level accuracy",
//     },
//     {
//       id: 8,
//       url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//       title: "Concept development for fire fighter drone development",
//       description: "Concept development for fire fighter drone development",
//     },
//   ],
// };

// // const Gallery = () => {
// //   const [selectedMedia, setSelectedMedia] = useState(null);
// //   const [isVideo, setIsVideo] = useState(false);

// //   const openModal = (mediaItem, isVideoItem = false) => {
// //     setSelectedMedia(mediaItem);
// //     setIsVideo(isVideoItem);
// //   };

// //   const closeModal = () => {
// //     setSelectedMedia(null);
// //     setIsVideo(false);
// //   };

// //   return (
// //     <>
// //       <div className="container mx-auto p-4">
// //         <h2 className="text-2xl font-bold mb-4">Images</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {media.images.map((image) => (
// //             <motion.div
// //               key={image.id}
// //               className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer border-2 border-transparent"
// //               whileHover={{ scale: 1.05, borderColor: "white" }}
// //               transition={{ duration: 0.2 }}
// //               onClick={() => openModal(image)}
// //             >
// //               <img
// //                 src={image.src}
// //                 alt={image.title}
// //                 className="w-full h-64 object-cover transition-all duration-600"
// //               />
// //               <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
// //               <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                 <h3 className="font-semibold text-xl">{image.title}</h3>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //         <h2 className="text-2xl font-bold mt-8 mb-4">Videos</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {media.videos.map((video) => (
// //             <motion.div
// //               key={video.id}
// //               className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer border-2 border-transparent"
// //               whileHover={{ scale: 1.05, borderColor: "gray" }}
// //               transition={{ duration: 0.2 }}
// //               onClick={() => openModal(video, true)}
// //             >
// //               <div className="w-full h-64 relative flex items-center justify-center">
// //                 <ReactPlayer
// //                   url={video.url}
// //                   width="100%"
// //                   height="100%"
// //                   style={{ position: "absolute", top: 0, left: 0 }}
// //                 />
// //                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
// //               </div>
// //               <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                 <h3 className="font-semibold text-xl">{video.title}</h3>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {selectedMedia && (
// //         <ImageModal
// //           media={selectedMedia}
// //           isVideo={isVideo}
// //           onClose={closeModal}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default Gallery;

// // const Gallery = () => {
// //   const [selectedMedia, setSelectedMedia] = useState(null);
// //   const [isVideo, setIsVideo] = useState(false);

// //   const openModal = (mediaItem, isVideoItem = false) => {
// //     setSelectedMedia(mediaItem);
// //     setIsVideo(isVideoItem);
// //   };

// //   const closeModal = () => {
// //     setSelectedMedia(null);
// //     setIsVideo(false);
// //   };

// //   return (
// //     <>
// //       <div className="container mx-auto p-4">
// //         <h2 className="text-2xl font-bold mb-4">Images</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {media.images.map((image) => (
// //             <motion.div
// //               key={image.id}
// //               className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ duration: 0.2 }}
// //               onClick={() => openModal(image)}
// //             >
// //               <img
// //                 src={image.src}
// //                 alt={image.title}
// //                 className="w-full h-64 object-cover rounded-lg"
// //               />
// //               <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
// //               <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                 <h3 className="font-semibold text-lg">{image.title}</h3>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <h2 className="text-2xl font-bold mt-8 mb-4">Videos</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {media.videos.map((video) => (
// //             <motion.div
// //               key={video.id}
// //               className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ duration: 0.2 }}
// //               onClick={() => openModal(video, true)}
// //             >
// //               <div className="relative w-full aspect-video">
// //                 <ReactPlayer
// //                   url={video.url}
// //                   width="100%"
// //                   height="100%"
// //                   controls={false}
// //                 />
// //                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
// //               </div>
// //               <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                 <h3 className="font-semibold text-lg">{video.title}</h3>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {selectedMedia && (
// //         <ImageModal
// //           media={selectedMedia}
// //           isVideo={isVideo}
// //           onClose={closeModal}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default Gallery;
// const Gallery = () => {
//   const [selectedMedia, setSelectedMedia] = useState(null);
//   const [isVideo, setIsVideo] = useState(false);

//   const openModal = (mediaItem, isVideoItem = false) => {
//     setSelectedMedia(mediaItem);
//     setIsVideo(isVideoItem);
//   };

//   const closeModal = () => {
//     setSelectedMedia(null);
//     setIsVideo(false);
//   };

//   // Animation variants for staggered image appearance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Delay between child animations
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h2 className="text-2xl font-bold mb-4">Images</h2>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//         >
//           {media.images.map((image) => (
//             <motion.div
//               key={image.id}
//               className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer border-2 border-transparent"
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, borderColor: "white" }}
//               transition={{ duration: 0.3 }}
//               onClick={() => openModal(image)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.title}
//                 className="w-full h-64 object-cover transition-all duration-600"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
//               <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                 <h3 className="font-semibold text-xl">{image.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <h2 className="text-2xl font-bold mt-8 mb-4">Videos</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {media.videos.map((video) => (
//             <motion.div
//               key={video.id}
//               className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer border-2 border-transparent"
//               whileHover={{ scale: 1.05, borderColor: "gray" }}
//               transition={{ duration: 0.3 }}
//               onClick={() => openModal(video, true)}
//             >
//               <div className="w-full h-64 relative flex items-center justify-center">
//                 <ReactPlayer
//                   url={video.url}
//                   width="100%"
//                   height="100%"
//                   style={{ position: "absolute", top: 0, left: 0 }}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300"></div>
//               </div>
//               <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                 <h3 className="font-semibold text-xl">{video.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedMedia && (
//           <ImageModal
//             media={selectedMedia}
//             isVideo={isVideo}
//             onClose={closeModal}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";

const media = {
  images: [
    {
      id: 1,
      src: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe522837b-ed3b-4098-a071-57bbd130297c_6069x4368.png",
      title: "7 layer PCB with ESP C3",
      description: "7 layer PCB with ESP C3 with 4 mosfet and BMS",
      category: "PCB",
    },
    {
      id: 2,
      src: "https://th.bing.com/th/id/R.25e8b508ef521250ec85b732095cb650?rik=1XTzwdngkzr4hw&riu=http%3a%2f%2fiotboys.com%2fwp-content%2fuploads%2f2018%2f04%2fESP8266-10-DIY-Development-Boards-for-IoT-in-2018.jpg&ehk=wHKgVqCnC78nxzdiEsMU5rfhW8h9EhiSyQwVksBwBsQ%3d&risl=&pid=ImgRaw&r=0",
      title: "IOT Control Board",
      description: "IOT Control Board",
      category: "IoT",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-photo/composition-with-digital-tablet-electrician-work-items_169016-24255.jpg?t=st=1736312670~exp=1736316270~hmac=b17e7cceae6dae3026b6b040a88ca98e3f693fbd4e65dd2398e215c9b99e46a8&w=1060",
      title: "Battery Capacity Tester",
      description: "Battery Capacity Tester",
      category: "Testing",
    },
    {
      id: 4,
      src: "https://th.bing.com/th/id/OIP.TMP0W0rOjUF41Cz52y1i2QHaE8?rs=1&pid=ImgDetMain",
      title: "Flexible PCB ESP and BMS",
      description: "Flexible PCB ESP and BMS with MOSFET control",
      category: "PCB",
    },
  ],
};

const categories = ["All", "PCB", "IoT", "Testing"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (mediaItem) => {
    setSelectedMedia(mediaItem);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const filteredImages =
    selectedCategory === "All"
      ? media.images
      : media.images.filter((image) => image.category === selectedCategory);

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Category Buttons */}
        <div className="flex justify-center mb-6 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer border-2 border-transparent"
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-semibold text-xl">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <ImageModal
          media={selectedMedia}
          onClose={closeModal}
          isVideo={false}
        />
      )}
    </>
  );
};

export default Gallery;

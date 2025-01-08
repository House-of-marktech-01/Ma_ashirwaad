// import { useState, useEffect, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     phone: "",
//   });

//   const [formStatus, setFormStatus] = useState(""); // State to show form submission status
//   const [isVisible, setIsVisible] = useState(false); // State to track visibility
//   const contactRef = useRef(null); // Ref for the Contact section

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/contact",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         setFormStatus("Form submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//           phone: "",
//         }); // Reset form fields
//       } else {
//         setFormStatus("Error submitting the form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setFormStatus("Error submitting the form. Please try again.");
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current);
//     }

//     return () => {
//       if (contactRef.current) {
//         observer.unobserve(contactRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       className="relative flex h-screen overflow-hidden"
//       ref={contactRef}
//       style={{
//         backgroundImage:
//           "url('/assets/images/Residential Views/1651123338329_F2.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Left Side (Black Background) */}

//       {/* Right Side (Form Section) */}
//       <div className="relative w-full flex items-center justify-end bg-black bg-opacity-50 ">
//         {/* <div className="w-[50vw]"></div> */}
//         <motion.div
//           className="w-full md:w-2/3 lg:w-1/2 px-6 sm:py-8 flex flex-col justify-center bg-black h-full bg-opacity-80"
//           initial={{ opacity: 0, x: 50 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.h1
//             className="text-5xl lg:text-7xl sm:mb-8 font-cormorant text-white text-center"
//             initial={{ opacity: 0, x: 20 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//             transition={{ duration: 1 }}
//           >
//             Get in touch
//           </motion.h1>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   required
//                   className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   required
//                   className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4">
//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={(e) =>
//                     setFormData({ ...formData, subject: e.target.value })
//                   }
//                   required
//                   className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-300 mb-1"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={(e) =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-300 mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 rows={6}
//                 required
//                 className="w-full px-3 py-2 bg-secondaryBlack bg-opacity-50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 placeholder="Hello, I am interested in.."
//               ></textarea>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-primaryRed text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
//               >
//                 Send Now
//                 <ArrowRight className="inline-block ml-2" size={20} />
//               </button>
//             </div>
//           </form>

//           {/* Form submission status */}
//           {formStatus && (
//             <p className="mt-4 text-center text-primaryRed">{formStatus}</p>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// }



const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact
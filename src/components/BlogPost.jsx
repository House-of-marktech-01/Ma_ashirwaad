// BlogPost.js
import React from "react";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

export const BlogPost = ({ blogs }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return null;

  return (
    <div className="container mx-auto py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blogs
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[50vh] mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full z-10 flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span className="text-sm">{blog.date}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <span className="text-blue-600 font-medium">{blog.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-6">{blog.title}</h1>
          <div className="prose prose-lg max-w-none">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

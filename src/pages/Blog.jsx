// Blog.js
import React from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Blog = ({ blogs }) => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="container mx-auto py-8 lg:pt-32">
      {/* Banner Section */}
      <motion.div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://manyavar.scene7.com/is/image/manyavar/Manyavar%20homepage%20hero%20banner%20Without%20Copy%20Opt%202_2500x1042px?$WT_HP%2FMLP%2FWLP_Hero_D$")',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl font-bold text-white z-10">Blog</h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 lg:p-32">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="group cursor-pointer"
            onClick={() => handleBlogClick(blog.id)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full z-10 flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{blog.date}</span>
              </div>

              <div className="aspect-square overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-96 h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <span className="text-sm text-blue-600 font-medium">
                {blog.category}
              </span>
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

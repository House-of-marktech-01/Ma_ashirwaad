import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 bg-white text-black border-4 border-black">
      <h1 className="text-5xl font-extrabold text-center mb-8">
        Get in Touch with Us
      </h1>

      <div className="mb-8 text-center">
        <p className="text-2xl font-bold mb-6">
          We're here to help! If you have any questions or need support, feel free to reach out. Our team is available Monday to Friday, 10:00 AM to 6:00 PM.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-lg border-2 border-black w-full md:w-2/3 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded-lg border-2 border-black focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded-lg border-2 border-black focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded-lg border-2 border-black focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded-lg border-2 border-black focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded-lg border-2 border-black focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Type your message here"
                rows={6}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded-lg border-2 border-black focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#9A3131] hover:bg-teal-700 text-white rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {/* Contact Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="relative">
            <img
              src="https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
              className="max-w-full h-[55vh] rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300"
              alt="Contact Us"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-12 bg-white text-black border-2 border-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Quick Info</h2>
        <p className="text-lg font-bold mb-4">
          <span className="font-semibold">Office Location:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-lg font-bold">
          <span className="font-semibold">Email:</span> info@loremipsum.com
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 bg-[#9A3131] text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-xl">
            <p className="text-lg text-gray-800 mb-4 font-bold">"The team is incredibly helpful and responsive. I always feel supported whenever I reach out. Highly recommend!"</p>
            <p className="text-md font-bold text-teal-600">John Doe</p>
            <p className="text-sm text-gray-600">CEO, Example Corp</p>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-lg shadow-xl">
            <p className="text-lg text-gray-800 mb-4 font-bold">"Excellent service! The customer support team always goes above and beyond to ensure my issues are resolved quickly."</p>
            <p className="text-md font-bold text-teal-600">Jane Smith</p>
            <p className="text-sm text-gray-600">Marketing Director, Example Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

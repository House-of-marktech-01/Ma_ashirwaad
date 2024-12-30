import { useState } from "react";
// import { MapPin } from "lucide-react";
// import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <div className="max-w-4xl mx-auto p-8 pt-32">
      <h1 className="text-3xl md:text-5xl text-[#000000] text-left mb-4 py-8">
        Contact Us
      </h1>

      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Our team is dedicated to making sure we do everything we can to
          address your questions or concerns. If you&apos;d like to discuss any
          feedback about your experience, or have a product question, don&apos;t
          hesitate to reach out via mail Monday through Friday 10:00am to
          6:00pm.
        </p>

        <div className="mb-4">
          <p className="text-gray-700">
            <span className="font-extrabold">Address :</span> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed
          </p>
          <p className="text-gray-700">
            <span className="font-extrabold">Email :</span> Lorem ipsum dolor
            sit amet
          </p>
        </div>

        <div className="rounded-lg mb-8">
          <h1 className="text-3xl md:text-4xl text-[#000000] text-left mb-4 py-8">
            Note:
          </h1>
          <p className="text-gray-700 mb-4">
            If you have any inquiries about your order or would like to schedule
            a call with us, please send us an email at info@loremipsum.com.
            Kindly include your contact number and a brief description of the
            issue you&apos;re facing.
          </p>
          <p className="text-gray-700 mb-4">
            Please note that if you call us directly, we may not be able to
            attend to your call. Sending an email will ensure that our team can
            assist you promptly.
          </p>
          <p className="text-gray-700">
            Our team will get in touch with you shortly to help you.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-2/3"
        >
          <div className="col-span-1">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 bg-[#E9E7D0] rounded-2xl border-gray-200 border placeholder:text-gray-600"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full p-3 bg-[#E9E7D0] rounded-2xl border-gray-200 border placeholder:text-gray-600"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-3 bg-[#E9E7D0] rounded-2xl border-gray-200 border placeholder:text-gray-600"
            />
          </div>
          <div className="col-span-1">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-3 bg-[#E9E7D0] rounded-2xl border-gray-200 border placeholder:text-gray-600"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="w-full p-3 bg-[#E9E7D0] rounded-2xl border-gray-200 border placeholder:text-gray-600"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <textarea
              name="message"
              placeholder="Type your message here"
              rows={4}
              onChange={handleChange}
              className="w-full p-3 bg-[#E9E7D0] rounded-2xl border-gray-200 border placeholder:text-gray-600"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-950 text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
          <img
            src="https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"
            className="max-w-full h-[55vh] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

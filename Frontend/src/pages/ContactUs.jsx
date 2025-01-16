import React, { useState } from "react";
import phone from "../assets/images/phone.png";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import anarkali_kurta from "../assets/images/anarkali_kurta.png";
import CustomInput from "./../components/CustomInput";
import CustomButton from "./../components/CustomButton";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className=" fustat pt-44 mb-4">
      <div className="flex gap-4 justify-around  p-2 px-6 text-white">
        <div className="flex flex-col rounded-xl justify-center py-10 w-[29%] primaryColorBg items-center">
          <div className="w-10 h-10">
            <img src={location} alt="email" />
          </div>

          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-center">
            JadeBlue Lifestyle India Ltd,
            <br />
            Pariseema Complex, CG Road,
            <br />
            Ahmedabad 380006, Gujarat
          </p>
        </div>
        <div className="flex rounded-xl  py-10 w-[29%] justify-center primaryColorBg flex-col items-center">
          <div className="w-10 h-10">
            <img src={email} alt="email" />
          </div>
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="mt-5">hello@jadeblueindia.com</p>
        </div>
        <div className="flex rounded-xl  py-10  w-[29%]  justify-center primaryColorBg flex-col items-center">
          <div className="w-10 h-10">
            <img src={phone} alt="email" />
          </div>

          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="mt-5">9147546563, 335856778</p>
        </div>
      </div>

      {/* <div>

      </div> */}

      <div
        className=" flex mt-12 justify-center items-center"
        style={{
          backgroundImage: `url(${anarkali_kurta})`,
        }}
      >
        {/* <img src={anarkali_kurta} alt="Background" className="w-full h-full object-cover" /> */}
        <div className=" rounded-lg my-4 w-[80%] fustat flex flex-col items-center bg-[#050505] bg-opacity-30">
          <h2 className="text-white text-3xl font-bold mb-4 mt-6">
            Contact Us
          </h2>
          <p className="text-white text-lg mb-8 mt-4 px-12 text-center">
            Fill in the text to remind customers to fill in the form correctly
            so that your support team could contact them to help with the issues
            and answer all the questions.
          </p>
          <form className="p-6 rounded-lg  w-1/2">
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div> */}
            <CustomInput
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              name="name"
              label="Name"
              color="text-white"
              bg="bg-white"
            />

            <div className="mt-5">
              <CustomInput
                type="text"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                label="Email"
                color="text-white"
                bg="bg-white"
              />
            </div>
            <div className="mt-5">
              <label className="block text-white font-bold mb-2">Query</label>
              <textarea
                name="query"
                placeholder="Enter your message or query here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                rows="7"
                onChange={handleChange}
                value={formData.query}
                
              ></textarea>
            </div>
            <div className="flex justify-center mt-6 mb-4">
              <CustomButton
                type="filled"
                bgColor="bg-white"
                textCase="capitalize"
                text="Submit"
                borderColor="border-[#9A3131]"
                textColor="primaryColor"
                onClick={() => console.log("Learn More Clicked!")}
              />
            </div>

            {/* <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
            >
              Submit
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

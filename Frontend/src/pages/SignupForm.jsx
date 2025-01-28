import React, { useState } from "react";
import { register } from "../Store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
const SignupForm = () => {
  const [formData, setFormData] = useState({
   
    name: "",
    lastName: "",
    emailorphone: "",
    password: "",
    phone: "",
    address: "",
  });
 const dispatch = useDispatch()
 const navigate = useNavigate();

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(formData)
    try {
      const resultAction = await dispatch(register(formData));
     console.log(resultAction)
      if (register.fulfilled.match(resultAction)) {
        navigate("/verify-otp");
      } else {
        alert( "An unexpected error occurred");
      }
    } catch (e) {
      // showToast({ message: "An unexpected error occurred", type: "error" });
      alert( "An unexpected error occurred");
    }
  };
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center pt-36 pb-36"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/f7c9/0855/4e02df6eef8e23963217d8677a2340e0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZJonI51TjfHTBx1ae5KXSSUkfMiXec9zB45xZASdmoZ2aD7zG7gsBjeKfJgCececCHDlnoYL6Q8cT3Il9oM~SSbPrmBGt0TSG5Ktd7k9R-8vfZKuDO1bhThzojDRNM~~VNnPN43CMF8MOgSyR4qcVS7iM6txhkrdn4jIFqazVQ7uowOzdWubIU18KWXeHYnn2-5~NWuGBKS-l7GKu7WPHO3N8cYmHe3ozrnAN18jJ3ftXTnJVoNDmr-XM4f4Z9PGtqjlQFn-WnbOPehF0~CRmKKhDg1tcjjRhjRrRXrpu8Y1U0eVAEFv8QtIMBE5ukDZcrE2gQfabFByGAuMhmn8w')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">SIGN UP</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange} 
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange} 
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            name="emailorphone"
            value={formData.emailorphone}
            onChange={handleChange} 
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange} 
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange} 
            placeholder="Phone Number*"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange} 
            placeholder="Address*"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

import React, { useState } from "react";

const LoginRegister = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center pt-36"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/f7c9/0855/4e02df6eef8e23963217d8677a2340e0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZJonI51TjfHTBx1ae5KXSSUkfMiXec9zB45xZASdmoZ2aD7zG7gsBjeKfJgCececCHDlnoYL6Q8cT3Il9oM~SSbPrmBGt0TSG5Ktd7k9R-8vfZKuDO1bhThzojDRNM~~VNnPN43CMF8MOgSyR4qcVS7iM6txhkrdn4jIFqazVQ7uowOzdWubIU18KWXeHYnn2-5~NWuGBKS-l7GKu7WPHO3N8cYmHe3ozrnAN18jJ3ftXTnJVoNDmr-XM4f4Z9PGtqjlQFn-WnbOPehF0~CRmKKhDg1tcjjRhjRrRXrpu8Y1U0eVAEFv8QtIMBE5ukDZcrE2gQfabFByGAuMhmn8w')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-2">SIGN IN</h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email Id or Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.emailOrPhone}
              onChange={(e) =>
                setFormData({ ...formData, emailOrPhone: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              checked={formData.rememberMe}
              onChange={(e) =>
                setFormData({ ...formData, rememberMe: e.target.checked })
              }
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember Me
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1  bg-[#8B2121] text-white py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Login
            </button>
            <button
              type="button"
              className="flex-1 bg-white text-[#8B2121] py-3 px-4 rounded-lg border border-red-900 hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;

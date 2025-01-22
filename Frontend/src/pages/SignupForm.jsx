import React from 'react';

const SignupForm = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center pt-36 pb-36"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/f7c9/0855/4e02df6eef8e23963217d8677a2340e0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZJonI51TjfHTBx1ae5KXSSUkfMiXec9zB45xZASdmoZ2aD7zG7gsBjeKfJgCececCHDlnoYL6Q8cT3Il9oM~SSbPrmBGt0TSG5Ktd7k9R-8vfZKuDO1bhThzojDRNM~~VNnPN43CMF8MOgSyR4qcVS7iM6txhkrdn4jIFqazVQ7uowOzdWubIU18KWXeHYnn2-5~NWuGBKS-l7GKu7WPHO3N8cYmHe3ozrnAN18jJ3ftXTnJVoNDmr-XM4f4Z9PGtqjlQFn-WnbOPehF0~CRmKKhDg1tcjjRhjRrRXrpu8Y1U0eVAEFv8QtIMBE5ukDZcrE2gQfabFByGAuMhmn8w')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">SIGN UP</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Address*"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

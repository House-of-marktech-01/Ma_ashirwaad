import { useState } from "react";
import CustomInput from "./../components/CustomInput";
import CustomSelect from "./../components/CustomSelect";
import profile from "../assets/images/profile.jpg";
import sms from "../assets/images/sms.png";
import CustomButton from "../components/CustomButton";
const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    alternatePhone: "",
    gender: "",
    city: "",
    language: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="rounded shadow-md font-poppins pb-14">
      <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
        <h1 className="text-lg">Profile</h1>
      </div>
      <div className="flex flex-col mt-8 px-6">
        <div className=" flex fex-row justify-between">
          <div className="flex fex-row gap-4 items-center ">
            <div>
              <img
                src={profile}
                alt="Profile"
                className="rounded-full w-20 h-20"
              />
            </div>
            <div>
              <p className="font-semibold text-lg">Alexa Rawles</p>
              <p className="text-gray-500 text-base">alexarawles@gmail.com</p>
            </div>
          </div>

          <div>
            {/* <button className="text-blue-500 ml-auto">Edit</button> */}
            <CustomButton
              textCase="capitalize"
              text="Edit"
              borderColor="border-[#9A3131]"
              onClick={() => console.log("Learn More Clicked!")}
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 my-6 gap-6">
            <CustomInput
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
              label="Full Name"
            />
            <CustomInput
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              label="Phone Number"
            />
            <CustomSelect
              options={["Male", "Female", "Other"]}
              value={formData.gender}
              onChange={handleChange}
              name="gender"
              label="Gender"
            />
            <CustomSelect
              options={["New York", "Los Angeles", "Chicago"]}
              value={formData.city}
              onChange={handleChange}
              name="city"
              label="City"
            />
            <CustomSelect
              options={["English", "Spanish", "French"]}
              value={formData.language}
              onChange={handleChange}
              name="language"
              label="Language"
            />
            <CustomInput
              type="text"
              placeholder="Alternate Phone Number"
              value={formData.alternatePhone}
              onChange={handleChange}
              name="alternatePhone"
              label="Alternate Phone Number"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 px-6">
        <p className="font-semibold poppins text-lg">My email Address</p>
        <div className="pt-2 flex flex-row gap-6 items-center">
          <div className="bg-blue-100 rounded-full justify-center flex items-center w-10 h-10">
            <img src={sms} alt="sms" />
          </div>
          <div>
            <p className="font-medium popins">alexarawles@gmail.com</p>
            <p className="text-gray-500 poppins mt-1 text-sm">1 month ago</p>
          </div>
        </div>

        <button className="text-blue-500 bg-blue-100 mt-8 rounded-md p-2 px-4">
          +Add Email Address
        </button>
      </div>
    </div>
  );
};

export default Profile;

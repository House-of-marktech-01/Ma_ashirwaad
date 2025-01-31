import Address from "../models/Address.js";
import User from "../models/User.js";

export const addAddress = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      contactNumber,
      email,
      type,
      isPrimary,
      landmark,
      country,
      coordinates,
    } = req.body;
    const user = req.user.userId;
    console.log(req.body);
    const getuser = await User.findById(user);
    if (!getuser) {
      return res.status(404).json({ message: "User not found" });
    }
    const address = new Address({
      user,
      firstName,
      lastName,
      //   streetName: addressLine1,
      //   apartment: addressLine2,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      //   contactNo: contactNumber,
      contactNumber,
      email,
      type,
      isPrimary,
      landmark,
      country,
      coordinates,
    });

    await address.save();

    getuser.address.push(address._id);
    await getuser.save();
    res.status(201).json({ message: "Address added successfully", address });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAddress = async (req, res) => {
  try {
    const address = await Address.find({ user: req.user.userId });
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getAddressById = async (req, res) => {
  try {
      const address = await Address.findById(req.params.id);
      if (!address) return res.status(404).json({ message: 'address not found' });
      res.status(200).json(address);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const { addressId } = req.params;
    const {
      firstName,
      lastName,
      streetName,
      apartment,
      city,
      state,
      pincode,
      contactNo,
      email,
      type,
      isPrimary,
      landmark,
      country,
      coordinates,
    } = req.body;
    const updatedAt = Date.now();
    const address = await Address.findByIdAndUpdate(
      addressId,
      {
        firstName,
        lastName,
        streetName,
        apartment,
        city,
        state,
        pincode,
        contactNo,
        email,
        type,
        isPrimary,
        landmark,
        country,
        coordinates,
        updatedAt,
      },
      { new: true }
    );
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const { addressId } = req.params;
    const userId = req.user.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const address = await Address.findById(addressId);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    await Address.findByIdAndDelete(addressId);
    user.pull(addressId);
    await user.save();
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

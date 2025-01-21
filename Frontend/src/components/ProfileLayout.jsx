import { Link, Outlet, useLocation } from "react-router-dom";

const ProfileLayout = () => {
  const location = useLocation();

  return (
    <div className="w-full pt-32 sm:pt-44 px-1 sm:px-8 pb-6">
      <h1 className="text-2xl px-4 border-b pb-2 fustat font-bold">Hello User</h1>
      <div className="flex justify-start  pt-3">
        <Link
          to="/profile"
          className={`py-2 px-2  sm:px-4 fustat text-base  ${
            location.pathname === "/profile" ? "primaryColor" : "text-gray-500"
          }`}
        >
          Profile
        </Link>
        <Link
          to="/order-details"
          className={`py-2 px-4 fustat text-base  ${
            location.pathname === "/order-details" ? "primaryColor" : "text-gray-500"
          }`}
        >
          Order Details
        </Link>
        <Link
          to="/wishlist"
          className={`py-2 px-4 fustat text-base  ${
            location.pathname === "/wishlist" ? "primaryColor" : "text-gray-500"
          }`}
        >
          Wishlist
        </Link>
        <Link
          to="/saved-address"
          className={`py-2 px-4 fustat text-base  ${
            location.pathname === "/saved-address" ? "primaryColor" : "text-gray-500"
          }`}
        >
          Saved Address
        </Link>
      </div>

      <div className="p-4 pt-6 sm:pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;

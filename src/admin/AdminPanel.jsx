import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { div, div, div, div } from "@/components/ui/div";

// Mock API response for demo
const mockLogin = async (email, password) => {
  if (email === "demo@example.com" && password === "password123") {
    return {
      token: "mock-jwt-token",
      user: { id: 1, name: "Admin", email },
    };
  }
  throw new Error("Invalid credentials");
};

const AdminPanel = () => {
  const [emailorphone, setEmailorphone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mockLogin(emailorphone, password);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/admin-panel/dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-poppins">
      <div className="w-full max-w-lg mx-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold p-8 text-center">
            Ma ashirwad Admin Panel
          </h1>
          <div className="text-2xl text-center">Admin Login</div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={emailorphone}
                onChange={(e) => setEmailorphone(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="admin@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Sign in
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

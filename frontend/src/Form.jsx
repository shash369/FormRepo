import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaBook, FaGoogle } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";

export default function Form() {
  const [userType, setUser] = useState("Faculty");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginfn = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password, userType }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log(" Login success:", data);
        alert("Login successful!");
      } else {
        console.error(error);
        alert("Login failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };
  return (
    <div className="relative min-h-screen font-sans bg-gray-200">
      <div className="flex">
        {/* blue*/}
        <div className="w-1/2 m-3 bg-blue-600 text-white flex flex-col justify-center items-center px-8 py-9 rounded-3xl">
          <h1 className="font-extrabold text-2xl">CAMPUS</h1>
          <h1 className="font-extrabold text-2xl">CORE</h1>
          <h1 className="text-xl font-semibold text-center mb-2">
            Welcome to Your Academic Journey
          </h1>
          <p className="text-sm text-center max-w-md mb-10">
            Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10 mx-auto">
            <div className="bg-white/20 p-4 rounded-xl text-center w-32">
              <FaBook className="mx-auto mb-1" />
              <p className="font-semibold">Course</p>
              <p className="text-xs">Management</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl text-center w-32">
              <FaRegClock className="mx-auto mb-1" />
              <p className="font-semibold">Schedule</p>
              <p className="text-xs">Tracking</p>
            </div>
            <div className="bg-white/20 p-4 rounded-xl text-center w-32">
              <BsGraphUpArrow className="mx-auto mb-1" />
              <p className="font-semibold">Progress</p>
              <p className="text-xs">Analytics</p>
            </div>
          </div>

          <div className="bg-white/10 p-3 text-sm italic text-center max-w-md rounded-xl">
            <p>
              As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week.
            </p>
            <p className="font-semibold">Dr. Michael T. Engineering Faculty</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-gray-200 flex flex-col justify-center items-center px-16">
          <div className="mb-6 flex space-x-2">
            <button
              onClick={() => setUser("Student")}
              className={`px-4 py-2 rounded shadow-sm text-sm font-medium border ${
                userType === "Student" ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setUser("Faculty")}
              className={`px-4 py-2 rounded shadow-sm text-sm font-medium border ${
                userType === "Faculty" ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              Faculty
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-8">Logging in as {userType}</h2>
          <div className="w-full max-w-md space-y-4">
            <p className="text-xs font-bold m-1">{`${userType} ID or Email`}</p>
            <Input
              placeholder={`Enter your ${userType} ID or Email`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black placeholder-gray-500"
            />
            <div className="relative">
              <p className="text-xs font-bold m-1">Password</p>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white text-black placeholder-gray-500"
              />
              <a
                href="#"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </div>

            <Button
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              onClick={loginfn}
            >
              Login
            </Button>

            <div className="flex items-center justify-center my-4">
              <hr className="w-1/4 border-gray-300" />
              <span className="px-2 text-sm text-gray-500">or continue with</span>
              <hr className="w-1/4 border-gray-300" />
            </div>

            <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
              <FaGoogle />
              <span>Log In with Google</span>
            </Button>
          </div>
        </div>
      </div>

      {/*  */}
      <footer className="justify-between font-bold items-center absolute bottom-0 left-0 w-full bg-white text-black text-xsm py-4 text-center flex flex-row px-4">
        <div>Designed and developed by ZoroTeam</div>
        <div>
          <p className="mt-1 text-2xl font-bold">Shashwat Shukla</p>
        </div>
        <div>&copy; 2025 Zoro Innovations</div>
      </footer>
    </div>
  );
}

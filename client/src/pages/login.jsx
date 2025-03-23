import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from 'axios';
import { Checkbox } from "@/components/ui/checkbox"


export function Login() {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('mongodb://localhost:3001/Auth',{username, email, password})
    .then((res)=>{
      console.log(res);
    })
    .catch ((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-gray-300 to-blue-200">
      <div className="relative h-screen w-screen bg-white shadow-lg overflow-hidden">
        <div
          className={`absolute w-1/2 h-full p-12 transition-all duration-500 ${
            isActive ? "translate-x-0 opacity-100 z-0" : "translate-x-full opacity-0 z-10"
          }`}
        >
          <form className="flex flex-col items-center space-y-4" onsubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Create Account</h1>
            <span className="text-sm">or use your email for registration</span>
            <div className="flex items-center space-x-2">
              <Checkbox id="s" onchange/>
              <Checkbox id="Su"/>
            </div>
            <Input type="text" placeholder="Username" className="w-full" required onchange={(e)=> setUsername(e.target.value)}/>
            <Input type="email" placeholder="Email" className="w-full" required onchange={(e)=> setEmail(e.target.value)}/>
            <Input type="password" placeholder="Password" className="w-full" required onchange= {(e)=> setPassword(e.target.value)}/>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800"
              onClick={toggleForm}
            >
              Sign Up
            </Button>
          </form >
        </div>

        <div
          className={`absolute w-1/2 p-12 transition-all duration-500 ${
            isActive ? "translate-x-full   opacity-100 z-10" : "-translate-x-0 opacity-0 z-0"
          }`}
        >
          <form className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <span className="text-sm">or use your email password</span>

            <Input type="email" placeholder="Email" className="w-full" required />
            <Input type="password" placeholder="Password" className="w-full" required />
            <a href="#" className="text-sm text-gray-500">
              Forgot Your Password?
            </a>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800"
              onClick={toggleForm}
            >
              Sign In
            </Button>
          </form>
        </div>

        <div
          className={`absolute top-0 w-1/2 h-full flex items-center justify-center bg-black text-white p-12 transition-all duration-500 ${
            isActive ? "-translate-x-full opacity-100 z-10" : "translate-x-0 opacity-100 z-10"
          }`}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="mt-2">Enter your personal details to use all site features</p>
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-800"
              onClick={toggleForm}
            >
              Sign In
            </Button>
          </div>
        </div>

        <div
          className={`absolute top-0 w-1/2 h-full flex items-center justify-center bg-black text-white p-12 transition-all duration-500 ${
            isActive ? "translate-x-full opacity-100 z-10" : "translate-x-0 opacity-0 z-0"
          }`}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
            <p className="mt-2">Register with your personal details to use all site features</p>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800"
              onClick={toggleForm}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

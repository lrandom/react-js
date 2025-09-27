import { useState } from "react";
import { signup } from "../services/UserService";
import {  NavLink } from "react-router";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const res = await signup(payload);
      if (res) {
        alert("Signup success");
      }
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={_handleSubmit} className="space-y-4 md:w-1/2 w-full mx-auto">
       <h5 className="text-2xl font-bold">Signup To Shop App</h5>
        <div>
          <label className="block w-full">
            <span className="inline-block w-[20%]">Name:</span>
            <input
              type="text"
              className= "border-gray-500 border-2 p-2 rounded-md w-[80%]"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label className="block w-full">
            <span className="inline-block w-[20%]">Email:</span>
            <input
              type="text"
              name="email"
              className="border-gray-500 border-2 p-2 rounded-md w-[80%]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="block w-full">
            <span className="inline-block w-[20%]">Password:</span>
            <input
              type="password"
              className="border-gray-500 border-2 p-2 rounded-md w-[80%]"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="flex items-center gap-8 justify-end">
          <NavLink to="/login" className="hover:text-blue-500">Do you have account? Login Now</NavLink>
          <button type="submit" className="bg-blue-500 cursor-pointer text-white p-2 rounded-md w-1/3">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

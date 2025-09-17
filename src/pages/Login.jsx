import { useState } from "react";
import { login } from "../services/UserService";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    try {
      const res = await login(payload);
      if (res) {
        //console.log(res);
        const token = res.token;
        const user = res.user;
        alert("Login success");
        // save token to local storage
        localStorage.setItem("token",token);
        const newUser = {
            email: user.email,
            name: user.name,
        }
        localStorage.setItem("user",JSON.stringify(newUser));
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={_handleLogin} className="space-y-4 md:w-1/2 w-full mx-auto">
       <h5 className="text-2xl font-bold text-center mb-20">Login To Shop App</h5>
      
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
          <button type="submit" className="bg-blue-500 cursor-pointer text-white p-2 rounded-md w-1/3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

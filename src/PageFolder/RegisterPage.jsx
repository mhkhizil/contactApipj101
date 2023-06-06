import React, { useState } from "react";
import { CgGoogle } from "react-icons/cg";
import { useRegisterationMutation } from "../Redux/API/regApi";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [registeration, { isLoading }] = useRegisterationMutation();
   const passwordPattern = "abc";
  //   console.log(name,email,password,password_confirmation);
  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      const userInfo = { name, email, password, password_confirmation };
      console.log(userInfo);
      const { data } = await registeration(userInfo);
      console.log(data);
     
      if (data?.success ) {
        nav("/login");
      };
      if (isLoading ) {
        return (
            <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div>
          </div>
          
          
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className=" flex  bg-btc item center justify-around h-screen">
      {/* register div */}
      <div className=" px-5 h-screen flex items-center justify-center">
        <form onSubmit={registerHandler} action="" className="  w-full  inline">
          <div>
            <p className="  text-htc text-4xl font-mplus-rounded ">
              Create an account
            </p>
            <p className=" text-ptc font-mplus-rounded text-lg">
              Save your contacts with this site
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className=" py-3 w-full bg-transparent block border-0 border-b-2 focus:outline-none border-ptc focus:border-bc text-ptc"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className=" py-3 w-full bg-transparent block border-0 border-b-2 focus:outline-none border-ptc focus:border-bc  text-ptc"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" py-3  w-full bg-transparent block border-0 border-b-2 focus:outline-none border-ptc focus:border-bc text-ptc"
            />
       
            <input
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
              placeholder="Confirm Password"
              className="py-3  w-full block bg-transparent  border-b-2  border-ptc focus:outline-none  focus:border-bc text-ptc"
            />
            <div>
              <p className=" text-ptc">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className=" italic font-semibold">Log In</span>
                </Link>
              </p>
            </div>
            <button className=" rounded-2xl  w-full px-8 py-2 bg-transparent hover:bg-bc text-bc font-semibold hover:text-btc border border-btc hover:border-transparent">
              Create account
            </button>
          </div>
        </form>
      </div>
      {/* Pic div */}
      <div className=" h-screen flex">
        <img
          className=" rounded-2xl  w-full py-3"
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterPage;

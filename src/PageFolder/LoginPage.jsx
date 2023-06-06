import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/API/regApi";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/services/authSlice";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const userInfo = { email, password };
      console.log(userInfo);
      const { data } = await login(userInfo);
      dispatch(addUser({ user: data?.user, token: data?.token }));
      if (data?.success) {
        nav("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex  bg-btc item center justify-around h-screen">
      <div className=" px-5 h-screen flex items-center justify-center">
        <form onSubmit={loginHandler} action="" className="  w-full  inline">
          <div>
            <p className="  text-htc text-4xl font-mplus-rounded ">Log in</p>
            <p className=" text-ptc font-mplus-rounded text-lg">
              Now you dont have to memorise your contacts
            </p>

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

            <div>
              <p className=" text-ptc">
                Already have an account?{" "}
                <Link to={"/register"}>
                  <span className=" italic font-semibold">Sign In</span>
                </Link>
              </p>
            </div>
            <button className=" rounded-2xl  w-full px-8 py-2 bg-transparent hover:bg-bc text-bc font-semibold hover:text-btc border border-btc hover:border-transparent">
              Log in
            </button>
          </div>
        </form>
      </div>
      {/* Pic div */}
      <div className=" h-screen flex">
        <img
          className=" rounded-2xl  w-full py-5 px-3"
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginPage;

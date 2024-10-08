import { useState } from "react";
import Input from "../component/Input";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(fName, lName, email, password, confirmedPassword);
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center">
      <Navbar
        lightTheme={true}
        showSearch={false}
        background={false}
        absolutePosition={false}
      />
      <div className="flex-grow flex flex-col items-center justify-center">
        <form
          className="w-[570px] px-14 pt-9 pb-6 rounded-[4px] border-[1px] border-[#ABABAB]"
          onSubmit={handleLogin}
        >
          <h1 className="text-black text-2xl font-bold mb-6">
            Login
          </h1>
          <Input
            type={"email"}
            placeholder={"Username or Email"}
            setValue={setEmail}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            setValue={setPassword}
          />
          <button className="w-full mt-10 mb-6 py-3.5 bg-[#f9a51a] text-center text-black text-base font-medium">
            Login
          </button>
          <div className="text-black text-base font-medium text-center">Don&apos;t have an account?&nbsp;
            <span
              className="text-[#f9a51a] underline cursor-pointer"
              onClick={() => navigate('/register')}
            >Create an account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import Input from "../component/Input";
import Navbar from "../component/Navbar";
import SocialLogin from "../component/SocialLogin";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(fName, lName, email, password, confirmedPassword);
  };

  return (
    <div className="bg-white h-screen flex justify-center flex-col items-center">
      <Navbar
        lightTheme={true}
        showSearch={false}
        background={false}
        absolutePosition={false}
      />
      <div className="flex flex-col items-center justify-center">
        <form
          className="w-[570px] px-14 pt-9 pb-6 rounded-[4px] border-[1px] border-[#ABABAB]"
          onSubmit={handleLogin}
        >
          <h1 className="text-black text-2xl font-bold font-['Montserrat']">
            Create an account
          </h1>
          <Input type={"text"} placeholder={"First Name"} setValue={setFName} />
          <Input type={"text"} placeholder={"Last Name"} setValue={setLName} />
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
          <Input
            type={"password"}
            placeholder={"Confirm Password"}
            setValue={setConfirmedPassword}
          />
          <button className="w-full my-6 py-3.5 bg-[#f9a51a] text-center text-black text-base font-medium">
            Create an account
          </button>
          <div className="text-black text-base font-medium text-center">Already have an account?&nbsp;
            <span onClick={()=>navigate('/login')} className="text-[#f9a51a] underline cursor-pointer">Login</span>
          </div>
        </form>
        <div className="flex items-center gap-5 my-6">
          <div className="w-[200px] h-[0px] border border-[#aaaaaa]" />
          <p className="text-black text-base font-medium">
            or
          </p>
          <div className="w-[200px] h-[0px] border border-[#aaaaaa]" />
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;

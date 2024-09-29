import Navbar from "../component/Navbar";

const Login = () => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <Navbar lightTheme={true} showSearch={true} background={true} absolutePosition={false} />
      <div className="flex-grow flex items-center justify-center">
        <form
          className="w-[570px] px-14 pt-9 pb-6 rounded-[4px] border-[1px] border-[#ABABAB]">
          <div className="text-black text-2xl font-bold font-['Montserrat']">Create an account</div>
            <input type="text" placeholder="Username or Email" className="input input-bordered w-full max-w-xs outline-none border-none focus:outline-none" />
        </form>
      </div>
    </div>

  );
};

export default Login;
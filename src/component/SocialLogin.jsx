const SocialLogin = () => {
  return (
    <div className="h-28 w-full flex flex-col items-center gap-[9px] px-14">
      <button className="btn px-2 py-[7px] flex justify-between items-center w-full bg-white rounded-full border border-[#c6c6c6]">
        <img className="size-[37px]" src="images/icons/fb.png" />
        <p className="text-black text-base font-medium font-['Montserrat']">Continue with Facebook</p>
        <div />
      </button>
      <button className="btn px-2 py-[7px] flex justify-between items-center w-full bg-white rounded-full border border-[#c6c6c6]">
        <img
          className="size-[37px]"
          src="images/icons/google.png" />
        <p
          className="text-black text-base font-medium font-['Montserrat']">
          Continue with Google
        </p>
        <div />
      </button>
    </div>
  );
};

export default SocialLogin;
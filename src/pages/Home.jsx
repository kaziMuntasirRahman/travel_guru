import { FaArrowRight } from "react-icons/fa";
import Navbar from "../component/Navbar";
import Slide from "../component/Slide";

const Home = () => {
  return (
    <div
      className="w-screen h-screen px-36 py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/home-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar showSearch={true} lightTheme={false} />
      <section className="flex relative mt-36 h-[416px]">
        <div className="w-[455px]">
          <h1 className="text-white text-[97.68px] font-normal secondFont">Cox's bazar</h1>
          <p className="text-white leading-normal">
            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
          </p>
          <button
            className="text-black px-7 py-3 bg-[#f9a51a] rounded-[5px] flex items-center gap-[10px] mt-[26px]">
            <p>Booking</p>
            <FaArrowRight />
          </button>
        </div>
        <Slide />
      </section>
    </div>
  );
};

export default Home;

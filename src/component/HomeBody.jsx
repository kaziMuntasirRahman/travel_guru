import { FaArrowRight } from "react-icons/fa";
import Slide from "./slide/Home";

const HomeBody = () => {
  return (
    <div className="flex justify-between mt-24 ml-36 h-[416px] border">
      <section className="w-[455px]">
        <h1 className="text-white text-[97.68px] secondFont">Cox's bazar</h1>
        <p className="text-white leading-normal">
          Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
        </p>
        <button
          className="text-black px-7 py-3 bg-[#f9a51a] rounded-[5px] flex items-center gap-[10px] mt-[26px]">
          <p>Booking</p>
          <FaArrowRight />
        </button>
      </section>
      <Slide />
    </div>
  );
};

export default HomeBody;
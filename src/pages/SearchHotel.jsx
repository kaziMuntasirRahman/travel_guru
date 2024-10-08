import HotelCart from "../component/HotelCart";
import Navbar from "../component/Navbar";

const SearchHotel = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white pb-8">
      <Navbar
        showSearch={false}
        lightTheme={true}
        background={false}
        absolutePosition={false}
      />
      <div className="mx-[135px] h-[2px] bg-[#d1d1d1] mb-5 flex" />
      <section className="w-full px-[135px] flex gap-14 justify-evenly items-center">
        <div id="left">
          <p className="text-[#2b2b2b] text-base font-normal">252 stays Apr 13-17 3 guests</p>
          <h3 className="text-black text-2xl font-bold mb-7 mt-2">Stay in Cox&apos;s Bazar</h3>
          <div id="content" className="flex flex-col gap-11">
            <HotelCart />
            <HotelCart />
            <HotelCart />
          </div>
        </div>
        <div id="map" className="w-[500px] h-full mt-auto rounded-[13px]">
          <img src="https://via.placeholder.com/500x702" />
        </div>
      </section>
    </div>
  );
};

export default SearchHotel;

// { showSearch, lightTheme, background, absolutePosition }
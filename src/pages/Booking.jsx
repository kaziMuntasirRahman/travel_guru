import DatePickerContainer from "../component/DatePickerContainer";
import Navbar from "../component/Navbar";

const Booking = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/home-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
      <Navbar showSearch={true} lightTheme={false} background={true} absolutePosition={false} />
      <section className="flex justify-between items-center mx-32 my-24">
        <div className="flex flex-col w-[500px]">
          <h1 className="text-white text-[97.68px] font-normal secondFont">Cox's bazar</h1>
          <p className=" text-white text-base">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
        </div>
        <DatePickerContainer />
      </section>
    </div>
  );
};

export default Booking;
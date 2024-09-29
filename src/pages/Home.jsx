import Navbar from "../component/Navbar";
import Slide from "../component/Slide";

const Home = () => {
  return (
    <div className="relative">
      <Navbar showSearch={true} lightTheme={false} background={true} absolutePosition={true} />
      <Slide />
    </div>
  );
};

export default Home;
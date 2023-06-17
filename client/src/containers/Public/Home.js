import { Outlet } from "react-router-dom";

import Header from "./Header";
import { Navigation, Search } from "./index";

const Home = () => {
  return (
    <div className="w-full m-auto h-full flex flex-col items-center ">
      <Header />
      <Navigation />
      <Search />
      <div className="w-4/5 lg:w-4/5 flex flex-col items-start justify-start mt-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { path } from "./utils/path";
import {
  Home,
  Login,
  RentalApartment,
  RentalRoom,
  RentalSpace,
  RentalHouse,
  Homepage,
} from "./containers/Public";

const App = () => {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route index element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.RENTAL_APARTMENT} element={<RentalApartment />} />
          <Route path={path.RENTAL_ROOM} element={<RentalRoom />} />
          <Route path={path.RENTAL_SPACE} element={<RentalSpace />} />
          <Route path={path.RENTAL_HOUSE} element={<RentalHouse />} />
          <Route path={path.RENTAL_HOUSE} element={<RentalHouse />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

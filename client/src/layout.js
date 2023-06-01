import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import { path } from "./utils/constant";

const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={path.HOME} element={<div>Home</div>} />
        <Route path={path.LOGIN} element={<div>Login</div>} />
      </Routes>
    </Router>
  );
};

export default Layout;

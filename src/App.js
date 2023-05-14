import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";

import { Routes, Route } from "react-router-dom";


const Shop = () => (
  <h2>I am the shop site</h2>
);

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
};

export default App;

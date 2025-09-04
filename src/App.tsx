import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/one/:keyword" element={<SecondPage />} />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;

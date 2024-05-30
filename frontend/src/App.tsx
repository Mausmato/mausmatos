import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;

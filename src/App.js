import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import GuestBook from "./GuestBook";
import PhotoBook from "./PhotoBook";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guestbook" element={<GuestBook />} />
        <Route path="/photobook" element={<PhotoBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

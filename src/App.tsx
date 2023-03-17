import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUsers from "./Components/ListUsers";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <Router>
      <div className="max-w-[1200px] mx-auto">
        <Routes>
          <Route index element={<ListUsers />} />
          <Route path={"/user/:id"} element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

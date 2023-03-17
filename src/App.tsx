import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUsers from "./components/ListUsers";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<ListUsers />} />
        <Route path={"/user/:id"} element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

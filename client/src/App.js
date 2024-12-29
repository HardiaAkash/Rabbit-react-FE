import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

// Lazy load pages
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Edit = lazy(() => import("./pages/Edit"));
const User = lazy(() => import("./pages/User"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Users = lazy(() => import("./pages/Users"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/profile/edit" element={<Edit />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

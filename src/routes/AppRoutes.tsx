import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Views existentes que vamos a mantener
import HomePage from "../views/HomePage";

// Nuevas vistas educativas
import Matematicas from "../views/Matematicas";
import Ciencias from "../views/Ciencias";
import Sociales from "../views/Sociales";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="matematicas" element={<Matematicas />} />
        <Route path="ciencias" element={<Ciencias />} />
        <Route path="sociales" element={<Sociales />} />
      </Route>
    </Routes>
  );
}

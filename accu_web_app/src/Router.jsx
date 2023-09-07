import { Route, createHashRouter, createRoutesFromElements, redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ThemeSelector from "./Layout/ThemeSelector";
import Agenda from "./Pages/Agenda";
import Info from "./Pages/Info";
import Field from "./Pages/Field";
import Speakers from "./Pages/Speakers";
import { DateTime } from "luxon";

const loader = async () => {
  const user = localStorage.getItem("user");
  if (!user || parseInt(user) < DateTime.now().toMillis()) {
    return redirect("/login");
  }
  return null;
};

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<ThemeSelector />}>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />} loader={loader}>
        <Route index element={<Home />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="info" element={<Info />} />
        <Route path="field" element={<Field />} />
        <Route path="speakers" element={<Speakers />} />
      </Route>
      <Route path="profile/:id" element={<Profile />} />
    </Route>
  )
);

export default router;

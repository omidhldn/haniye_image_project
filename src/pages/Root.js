import { Outlet } from "react-router-dom";
import Navigation from "../UI/Navigation";

const RootLayout = () => {
  return(
    <>
      <Navigation/>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default RootLayout;
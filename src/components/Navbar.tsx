import { WithoutNull } from "@/app.types";
import { NavigationQueryResult } from "@/sanity/types";

type NavBarProps = WithoutNull<NavigationQueryResult>;

const NavBar = (props: NavBarProps) => {
  console.log("Navbar Data", props);
  return (
    <header className="text-center font-montserrat text-6xl">NavBar</header>
  );
};

export default NavBar;

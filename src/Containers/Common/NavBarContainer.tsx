import { useEffect, useState } from "react";
import NavigationBar from "../../Components/Common/NavBar";

const NavBarContainer = () => {
    const [scrolling, setSrolling] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setSrolling(false);
        } else {
            setSrolling(true);
        }
    };

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger-button") as HTMLDivElement;
        const menu = document.querySelector(".menus") as HTMLDivElement;
        const expandMenu = () => {
            menu.classList.toggle("expand");
        };
        document.addEventListener("scroll", handleScroll);
        hamburger.addEventListener("click", expandMenu);
        return () => {
            hamburger.removeEventListener("click", expandMenu);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <NavigationBar scrolling={scrolling} />
    );
};

export default NavBarContainer;

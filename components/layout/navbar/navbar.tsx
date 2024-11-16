import { FC, useState } from "react";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import MenuIcon from "../../../assets/menu-icon.svg";
import Acedia06Icon from "../../../assets/acedia-06.svg";
import { Container } from "../../container";

export const Navbar: FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = (open: boolean) => {
    setIsMobileSidebarOpen(open);
    if (open) document.body.classList.add("max-h-screen", "overflow-hidden");
    else document.body.classList.remove("max-h-screen", "overflow-hidden");
  };

  return (
    <>
      <nav className="z-50 w-full absolute left-0 top-0">
        <Container className="relative flex h-[calc(80px+80px+60px)] items-center justify-between">
          <div className="block lg:hidden">
            <button
              type="button"
              className="hover:opacity-80 transition-opacity"
              onClick={() => toggleMobileSidebar(true)}
            >
              <img src={MenuIcon} alt="Hamburger Icon" width="20px" height="20px" />
            </button>
          </div>

          <div className="hidden lg:flex absolute top-0 left-0 w-full h-full justify-center items-center">
            <DesktopNavbar />
          </div>

          <a href="/" className="hover:opacity-80 transition-opacity">
            <img src={Acedia06Icon} alt="Acedia Logo" width="180px" />
          </a>
        </Container>
      </nav>
      {isMobileSidebarOpen && <MobileNavbar onClose={() => toggleMobileSidebar(false)} />}
    </>
  );
};

import { FC, useState } from "react";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import MenuIcon from "../../../assets/menu-icon.svg";
import Acedia06Icon from "../../../assets/acedia-06.svg";

export const Navbar: FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = (open: boolean) => {
    setIsMobileSidebarOpen(open);
    if (open) document.body.classList.add("max-h-screen", "overflow-hidden");
    else document.body.classList.remove("max-h-screen", "overflow-hidden");
  };

  return (
    <section className="max-w-screen absolute left-0 top-0 z-50 flex max-h-screen w-full items-start justify-center">
      <div className="absolute left-0 top-0 flex h-[140px] w-full items-center justify-between">
        <div className="absolute left-0 top-[70px] order-1 -translate-y-1/2 sm:static sm:block sm:translate-y-0 lg:hidden">
          <div className="px-6">
            <button type="button" onClick={() => toggleMobileSidebar(true)}>
              <img src={MenuIcon} alt="Hamburger Icon" width="20px" height="20px" />
            </button>
          </div>
        </div>
        <div className="order-2 flex w-full justify-center sm:block sm:w-auto">
          <div className="px-8">
            <a href="/">
              <img src={Acedia06Icon} alt="Acedia Logo" />
            </a>
          </div>
        </div>
      </div>
      <DesktopNavbar />
      {isMobileSidebarOpen && <MobileNavbar onClose={() => toggleMobileSidebar(false)} />}
    </section>
  );
};

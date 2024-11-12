import { DispatchWithoutAction, FC } from "react";
import { usePageContext } from "vike-react/usePageContext";
import MenuXIcon from "../../../assets/menu-x.svg";
import { cn } from "../../../lib/cn";
import { NavbarItems } from "./navbar-items";

export const MobileNavbar: FC<{ onClose: DispatchWithoutAction }> = ({ onClose }) => {
  const { urlParsed } = usePageContext();

  return (
    <nav className="is--mobile sticky z-50 flex h-screen w-screen flex-col items-center justify-center overflow-auto bg-black">
      <button type="button" onClick={onClose} className="absolute left-0 top-0 px-10 py-14">
        <img src={MenuXIcon} alt="X Icon" width="22px" height="22px" />
      </button>
      <ul className="flex w-full flex-col items-center gap-[35px]">
        {NavbarItems.map((e) => {
          const isSelected = e.href === urlParsed.pathnameOriginal;
          return (
            <li key={e.label}>
              <a
                href={e.href}
                className={cn("font-serif text-[30px] leading-[29px] tracking-[0px] text-[#6C7361] no-underline", {
                  "font-bold text-lime-primary": isSelected,
                })}
              >
                {e.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-center gap-4 py-12 text-center font-serif text-xs text-white">
        <p>{new Date().getFullYear()} Acedia</p>
        <p>Copyright Policy</p>
      </div>
    </nav>
  );
};

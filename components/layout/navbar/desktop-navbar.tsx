import { FC } from "react";
import { NavbarItems } from "./navbar-items";
import { cn } from "../../../lib/cn";

export const DesktopNavbar: FC = () => {
  return (
    <nav className="is--desktop z-50 hidden py-10 lg:block">
      <ul className="flex items-center justify-center gap-0 rounded-full bg-[#F6FCDC] bg-opacity-20">
        {NavbarItems.map((e, index, arr) => (
          <li key={e.label}>
            <a
              href={e.href}
              className={cn(
                "inline-block cursor-pointer px-3 py-4 font-sans text-[15px] font-medium leading-[28px] text-[#F6FCDC] no-underline transition-colors hover:text-[#e5f69b]",
                { "pl-6": index <= 0, "pr-6": index >= arr.length - 1 },
              )}
            >
              {e.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

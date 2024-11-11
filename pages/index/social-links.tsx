import { FC } from "react";
import { InstagramIcon } from "../../components/icons/social/instagram";
import { LinkedInIcon } from "../../components/icons/social/linkedin";
import { YoutubeIcon } from "../../components/icons/social/youtube";
import { TiktokIcon } from "../../components/icons/social/tiktok";
import { XSocialIcon } from "../../components/icons/social/x-social";
import { EmailIcon } from "../../components/icons/social/email";

const links = [
  { href: "", icon: InstagramIcon },
  { href: "", icon: LinkedInIcon },
  { href: "", icon: YoutubeIcon },
  { href: "", icon: TiktokIcon },
  { href: "", icon: XSocialIcon },
  { href: "", icon: EmailIcon },
] as const;

export const SocialLinks: FC = () => {
  return (
    <ul className="flex items-center justify-center gap-[11px]">
      {links.map((e, index) => (
        <li key={`${e.href}-${index}`}>
          <a rel="noreferrer" href={e.href} target="_blank" className="group">
            <e.icon className="text-[#A2FF00] transition-colors group-hover:text-[#8ad900]" />
          </a>
        </li>
      ))}
    </ul>
  );
};

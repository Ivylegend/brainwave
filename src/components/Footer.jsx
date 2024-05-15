import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-2 !py-8">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {" "}
          {new Date().getFullYear()}. All rights reserved
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((icon, index) => (
            <a
              href={icon.url}
              key={icon.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={icon.iconUrl} width={16} height={16} alt={icon.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;

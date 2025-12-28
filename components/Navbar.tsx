/* eslint-disable @next/next/no-img-element */
import { navIcons, navLinks } from "@/constants";
import useWindowStore from "@/store/window";
import dayjs from "dayjs";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import ThemePopover from "./ui/ThemePopover";

export const Navbar = () => {

  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">
          Manik&apos;s Portfolio
        </p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => {
            // 🌗 THEME TOGGLER ICON
            if (id === 4) {
              return (
                <li key={id}>
                  <ThemePopover img={img} />
                </li>
              )
            }

            return (
              <li key={id}>
                <img
                  src={img}
                  alt={`icon-${id}`}
                  className="icon-hover cursor-pointer"
                />
              </li>
            )
          })}
        </ul>
        <time>{dayjs().format("ddd MM D h:mm A")}</time>
      </div>
    </nav>
  )
}


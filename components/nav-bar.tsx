"use client";
import { useTheme } from "next-themes";
import Link from "next/link";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" border-b">
      <div className=" py-4 container mx-auto ">
        <div className=" flex items-center justify-between">
          <h1 className=" text-2xl font-[600] 2xl:text-2xl ">
            PaingThuraKyaw<span className=" text-primary">.dev</span>
          </h1>

          <div className=" flex items-center gap-5">
            <Link
              className=" hover:text-primary text-foreground text-lg 2xl:text-xl"
              href={"/#introduce"}
            >
              Introduce
            </Link>
            <Link
              className=" hover:text-primary text-foreground text-lg 2xl:text-xl"
              href={"/#projects"}
            >
              Projects
            </Link>
            <Link
              className=" hover:text-primary text-foreground text-lg 2xl:text-xl"
              href={"/#contact"}
            >
              Contact
            </Link>

            <div className="">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 border rounded"
              >
                {theme === "light" ? "🌞 Light" : "🌚 Dark"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

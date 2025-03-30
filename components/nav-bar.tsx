import Link from "next/link";

const NavBar = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import { GridBackgroundDemo } from "@/components/grid-background";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const HeroSection = () => {
  return (
    <GridBackgroundDemo>
      <div className=" overflow-x-hidden container px-20 mx-auto">
        <div className="grid items-center grid-cols-3">
          <div className=" col-span-2 text-foreground">
            <p className=" text-lg 2xl:text-xl">Hi there!. I'm</p>
            <div className=" mt-4 space-y-4 pl-3">
              <h2 className="  text-4xl 2xl:text-5xl text-primary font-bold">
                Paing Thura Kyaw
              </h2>
              <p className="text-4xl 2xl:text-5xl text-foreground font-bold">
                A FullStack Developer
              </p>
              <p className=" 2xl:text-xl">
                I'm a passionate and creative FullStack Developer based in
                Myanmar with a strong background in web technologies such as
                HTML, CSS, and JavaScript, Java I specialize in creating
                visually appealing and user-friendly websites and applications.
                I’m proficient in modern frameworks like React and Next js and
                Spring and Spring boot.
              </p>
            </div>
          </div>
          <div className="">
            <DotLottieReact
              className=" -translate-x-[150px] lg:translate-x-[-200px] lg:pr-[120px] 2xl:pr-[100px] w-[1000px]"
              src="/home/developer.json"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </GridBackgroundDemo>
  );
};

export default HeroSection;

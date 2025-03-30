import { RoughNotation } from "react-rough-notation";
import people from "../../public/home/paing.jpeg";
import Image from "next/image";
const Introduce = () => {
  return (
    <div id="introduce" className=" px-20 pt-5container mx-auto h-screen">
      <div className=" flex justify-center">
        <RoughNotation
          type="underline"
          show
          iterations={3}
          color="rgb(5 206 145)"
        >
          <h3 className=" text-3xl font-bold">Introduce</h3>
        </RoughNotation>
      </div>
      <div className=" items-center mt-10 grid grid-cols-2">
        <div className=" ">
          {/* <div className=" h-[200px] w-[150px] border border-dashed border-foreground "></div> */}
        </div>
        <div className=" text-foreground">
          <p>
            Frontend Developer with over 4 years of experience in building
            modern, responsive, and user-friendly websites and applications.
            Throughout my career, I have honed my skill in HTML , CSS and
            Javascript and Popular frameworks like React JS and Next Js.
          </p>
          <p>
            I specialize in creating seamless user experiences by focusing on
            performance, accessbility and aesthetics. Over the years, I've
            collaborated with cross-functional terms and have played an integral
            role in developing scalable and high-performing websites
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;

import { RoughNotation } from "react-rough-notation";
import people from "../../public/home/paingthura.jpeg";
import Image from "next/image";
const Introduce = () => {
  return (
    <div id="introduce" className=" pt-20 px-20 pt-5container mx-auto h-screen">
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
        <div className=" flex items-center justify-center">
          <div className="border border-dashed border-foreground ">
            <Image
              src={people}
              alt="Paing Thura Kyaaw"
              className=""
              width={200}
              height={300}
            />
          </div>
        </div>
        <div className=" space-y-3 text-foreground">
          <p>
            I am a Frontend Developer with over 3 years of experience and 1 year
            of experience as a Backend Developer. I specialize in building
            modern, responsive, and user-friendly websites and applications.
            Throughout my career, I have honed my skills in HTML, CSS, and
            JavaScript, as well as popular frameworks such as React.js, Next.js
            for frontend development, and Spring and Spring Boot for backend
            development
          </p>
          <p>
            specialize in creating seamless user experiences by focusing on
            performance, accessibility, and aesthetics. Over the years, I’ve
            collaborated with cross-functional teams and played an integral role
            in developing scalable and high-performing web applications.
          </p>
          <p>
            In addition to frontend development, I also have experience in
            backend development using Spring and Spring Boot. I have built
            RESTful APIs, implemented secure authentication and authorization
            mechanisms, and worked with relational databases like MySQL and
            PostgreSQL. I am also familiar with deploying applications using
            tools such as Docker and GitHub Actions, and ensuring optimal
            server-side performance and scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;

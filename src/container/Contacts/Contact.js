import Form from "./Form";
import { GrLocation } from "react-icons/gr";
import { LuPhone, LuMail } from "react-icons/lu";
import Container from "@/components/container";

const Contact = ({ handleFormSubmit }) => {
  return (
    <section className="bg-[url('/img/contact.png')] h-[600px] bg-no-repeat bg-center bg-cover mb-[80px] md:pb-[100px]">
      <Container>
        <div className="flex justify-center">
          {/* Content Section */}
          <div className="pt-10 lg:pt-32 max-w-7xl flex flex-col lg:flex-row h-full w-full justify-between space-y-5 lg:space-y-0">
            <div className="text-white lg:w-1/2 w-full text-center lg:text-left space-y-5">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 max-sm:text-3xl">
                Biz bilan <span className="text-[#f48c06]">bog'lanish </span>
              </h2>
              <div className="flex  justify-center lg:justify-start">
                <div className="flex flex-col space-y-4 text-lg">
                  <p className="flex items-center gap-3 lg:justify-start">
                    <LuPhone className="text-[28px]" />
                    <a href="tel:+998971016600">+998 97 101 6600</a>
                  </p>
                  <p className="flex items-center gap-3 lg:justify-start">
                    <GrLocation className="text-[28px]" />
                    <p>Tashkent, Uzbekistan</p>
                  </p>
                  <div className="flex items-center gap-3 lg:justify-start">
                    <LuMail className="text-[28px]" />
                    <a href="repidagency@gmail.com">repidagency@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <Form onSubmit={handleFormSubmit} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

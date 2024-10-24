import Image from "next/image";
import Image1 from "../../../public/img/1.png";
import Image2 from "../../../public/img/2.png";

export default function Home() {
  return (
    <div className="container mx-auto p-6 ">
      <section className="mb-16">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet <br /> continental
          </h2>
          <div className="max-w-sm">
            <h3 className="text-lg text-wrap font-semibold">
              Lorem ipsum dolor
            </h3>
            <p className="text-gray-600 text-wrap">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s..
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-6 mx-auto w-full mb-4 h-3 " />

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <div className="mb-4">
              <Image
                src={Image2}
                alt=""
                width={700}
                height={200}
                className="rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur. Id purus <br /> imperdiet
              rhoncus sociis pulvinar eu. Sem sit <br /> volutpat nisl lorem
              lacinia faucibus sed vitae.
            </p>
          </div>
          <div>
            <div>
              <div className="mb-4">
                <Image
                  src={Image1}
                  alt=""
                  width={700}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur. Id purus <br />{" "}
                imperdiet rhoncus sociis pulvinar eu. Sem sit <br /> volutpat
                nisl lorem lacinia faucibus sed vitae.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet <br /> continental
          </h2>
          <div className="max-w-sm ">
            <h3 className="text-lg text-wrap font-semibold">
              Lorem ipsum dolor
            </h3>
            <p className="text-gray-600 text-wrap">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-300 my-6 mx-auto w-full mb-4 h-2  " />
      </section>
    </div>
  );
}

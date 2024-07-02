import React from "react";
import { getServicesDetails } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import { FaArrowRight } from "react-icons/fa";
const page = async ({ params }) => {
  const service = await getServicesDetails(params.id);

  console.log(service.service);
  if (!service.service) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto">
        <p>Service details not available.</p>
      </div>
    );
  }
  const { title, description, img, price, facility, _id } = service.service;
  console.log("Service details:", { title, description, img, price, facility });
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="relative">
        <Image
          src="/assets/images/checkout/checkout.png"
          width={1280}
          height={70}
          loading="lazy"
          alt="service"
          className="h-96 w-full"
        />

        <h2 className="absolute text-4xl text-white font-bold top-1/2 ml-8 md:ml-24">
          Service Details
        </h2>
        <h2 className="absolute bg-[#FF3811] text-white text-base py-3 px-6 w-56 flex justify-center items-center left-1/2 bottom-0">
          <Link href="/">
            <span>Home </span>
          </Link>
          <span> / Service Details</span>
        </h2>
      </div>
      <div className="my-6">
        <div className="md:flex gap-10">
          <div className="left w-[870px]">
            <Image
              src={img}
              width={855}
              height={425}
              loading="lazy"
              alt="service"
              style={{ width: "870px", height: "425px", borderRadius: 12 }}
            />
            <h2 className="my-8 text-2xl font-bold">{title}</h2>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {facility && facility.length > 0 ? (
                  facility.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 w-[404px] h-[204px] border-red-900 border-t-2 rounded-lg p-12 mb-4"
                    >
                      <p className="text-xl font-bold mb-3">{item.name}</p>
                      <p>{item.details}</p>
                    </div>
                  ))
                ) : (
                  <p>No facilities available</p>
                )}
              </div>
              <h2 className="my-6"> {description}</h2>
              <h2 className="text-2xl font-bold mt-12 mb-7">
                3 Simple Steps to Process
              </h2>
              <h2 className="my-6"> {description}</h2>
              <div className="flex justify-around  ">
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" bg-[#FF38111A] text-white rounded-full w-14 h-14 flex justify-center items-center text-center">
                    <span className="bg-[#FF3811]  rounded-full w-10 h-10 p-2 font-bold">
                      01
                    </span>
                  </h2>
                  <p className="text-lg font-semibold my-4 uppercase">
                    Step One
                  </p>
                  <p className="text-sm">
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" bg-[#FF38111A] text-white rounded-full w-14 h-14 flex justify-center items-center text-center">
                    <span className="bg-[#FF3811]  rounded-full w-10 h-10 p-2 font-bold">
                      02
                    </span>
                  </h2>
                  <p className="text-lg font-semibold my-4 uppercase">
                    Step Two
                  </p>
                  <p className="text-sm">
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" bg-[#FF38111A] text-white rounded-full w-14 h-14 flex justify-center items-center text-center">
                    <span className="bg-[#FF3811]  rounded-full w-10 h-10 p-2 font-bold">
                      03
                    </span>
                  </h2>
                  <p className="text-lg font-semibold my-4 uppercase">
                    Step Three
                  </p>
                  <p className="text-sm">
                    It uses a dictionary <br /> of over 200 .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="w-[364px] h-[490] p-8 bg-gray-200 space-y-4 rounded-lg">
              <h2 className="font-bold text-center text-xl">Services</h2>
              <h2 className="bg-white p-3 text-center">{title}</h2>
              <h2 className="bg-white p-3 text-center">{title}</h2>
              <h2 className="bg-white p-3 text-center">{title}</h2>
              <h2 className="bg-white p-3 text-center">{title}</h2>
              <h2 className="bg-white p-3 text-center">{title}</h2>
              <h2 className="bg-white p-3 text-center">{title}</h2>
            </div>
            <div className="bg-[#151515] text-white  p-10 rounded-lg mt-8">
              <p>Download</p>
              <div className="flex items-center justify-between gap-3 mt-6">
                <div className="flex justify-between items-center mb-8">
                  <DescriptionSharpIcon className="text-3xl h-8" />
                  <div>
                    <h2 className="text-sm">Our Brochure</h2>
                    <h2 className="text-xs text-[#A2A2A2]">Download</h2>
                  </div>
                </div>
                <div className="bg-[#FF3811] px-3 py-2">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex justify-between items-center">
                  <DescriptionSharpIcon className="text-3xl h-8" />
                  <div>
                    <h2 className="text-sm">Company Details</h2>
                    <h2 className="text-xs text-[#A2A2A2]">Download</h2>
                  </div>
                </div>
                <div className="bg-[#FF3811] px-3 py-2">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="bg-[#151515] my-8 py-12 rounded-lg">
              <div className="flex justify-center ">
                <Image
                  src="/assets/logo.svg"
                  width={855}
                  height={425}
                  alt={title}
                  style={{
                    width: "130px",
                    height: "90px",
                    background: "center",
                  }}
                />
              </div>
              <div className="text-white text-center mt-3">
                {" "}
                Need Help ? We Are Here To Help You
              </div>
              <div className=" bg-[#FFFFFF] w-[270px] h-[124px] rounded-xl mx-auto my-4 px-8 py-5 text-center">
                <h2 className="text-xl font-bold">
                  <span className="text-[#FF3811] ">Car Doctor</span> Special
                </h2>
                <h2 className="text-sm font-bold mt-2">
                  Save up to <span className="text-[#FF3811]">60 %</span>
                </h2>
                <h2 className=" bg-[#FF3811] py-4 rounded-lg mt-4 text-lg text-white">
                  Get A Quote
                </h2>
              </div>
            </div>
            <div className="text-4xl font-bold my-8">Price $ {price}.00</div>
            <div className="bg-[#FF3811] text-lg py-4 rounded-lg text-center font-bold my-8 text-white">
              <Link href={`/checkout/${_id}`}> Proceed Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

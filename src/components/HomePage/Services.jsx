import React from "react";
import { Button } from "../../app/MTailwind";
import ServiceCard from "../Cards/ServiceCard";
import { getServices } from "@/services/getServices";

const Services = async () => {
  const { services}  = await getServices();
  console.log(services)
  return (
    <div className="my-12 max-w-7xl mx-auto">
      <div className="text-center mb-8 space-y-4">
        <p className="text-[#FF3811] text xl font-bold">Services</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          <small>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center my-12 ">
        <Button
          className="border border-[#FF3811] text-[#FF3811] capitalize text-lg"
          variant="outlined"
        >
          More Services
        </Button>
      </div>
    </div>
  );
};
export default Services;

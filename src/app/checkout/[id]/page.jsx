"use client";
import { getServicesDetails } from "@/services/getServices";
import { Button } from "../../MTailwind";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Input } from "@mui/joy";
import { useSession } from "next-auth/react";

const CheckOut = ({ params }) => {
  const { data } = useSession();
  const [services, setServices] = useState({});
  const loadServices = async () => {
    const service = await getServicesDetails(params.id);
    setServices(service.service);
  };

  const { title, description, img, price, facility, _id } = services;
  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      name: data?.user?.name,
      email: data?.user?.email,
      phone: event.target.phone.value,
      address: event.target.address.value,
      date: event.target.date.value,
      serviceTitle: title,
      serviceID: _id,
      price: price,
    };
    const res = await fetch("http://localhost:3000/checkout/api/new-booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    });
  };

  useEffect(() => {
    loadServices();
  }, [params]);
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="relative h-100">
        <Image
          src={img}
          width={1280}
          height={70}
          alt="service"
          style={{ height: "400px", borderRadius: "12px" }}
        />

        <h2 className="absolute text-4xl text-[#FF3811] font-bold top-1/2 ml-8 md:ml-24">
          Details of {title}
        </h2>
        <h2 className="absolute bg-[#FF3811] text-white text-base py-3 px-6 w-56 flex justify-center items-center left-1/2 bottom-0">
          <Link href="/">
            <span>Home </span>
          </Link>
          <span> / Checkout</span>
        </h2>
      </div>
      <div className="my-12 p-12 bg-[#F3F3F3] rounded-lg">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <Input
              name="name"
              defaultValue={data?.user?.name}
              placeholder="Name"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="email"
              defaultValue={data?.user?.email}
              placeholder="Email"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="price"
              defaultValue={price}
              placeholder="Due Amount"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="phone"
              placeholder="Phone"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="address"
              placeholder="Present Address"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="date"
              defaultValue={new Date().getDate()}
              type="date"
              placeholder="Date"
              variant="outlined"
              color="warning"
              size="lg"
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="red"
            className="mt-4 p-4"
          >
            Order Confirm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

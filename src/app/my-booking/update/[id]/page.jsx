"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../../../MTailwind";
import { Input } from "@mui/joy";
import { useSession } from "next-auth/react";
// import { toast } from "react-toastify";
const UpdatePage = ({ params }) => {
  const { data } = useSession();
  const [booking, setBooking] = useState([]);

  const loadBooking = async () => {
    const updateBooking = await fetch(
      `http://localhost:3000/my-booking/api/booking/${params.id}`
    );
    const data = await updateBooking.json();
    setBooking(data.data);
  };

  const handleUpdateBooking=async()=>{
    event.preventDefault()
    const updatedBooking={
      date:event.target.date.value
      phone:event.target.phone.value
      address:event.target.address.value
    }
    const res= await fetch(
      `http://localhost:3000/my-booking/api/booking/${params.id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedBooking)
      })
      if(res.status===200){
       toast.success('Updated Successfully')
      }
  }
  useEffect(() => {
    loadBooking();
  }, [params]);
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="relative h-100">
        <Image
          src="/assets/images/checkout/checkout.png"
          width={1280}
          height={70}
          alt="service"
          style={{ height: "400px", borderRadius: "12px" }}
        />

        <h2 className="absolute text-4xl text-[#FF3811] font-bold top-1/2 ml-8 md:ml-24">
          Update
        </h2>
        <h2 className="absolute bg-[#FF3811] text-white text-base py-3 px-6 w-56 flex justify-center items-center left-1/2 bottom-0">
          <Link href="/">
            <span>Home </span>
          </Link>
          <span> / Update</span>
        </h2>
      </div>
      <div className="my-12 p-12 bg-[#F3F3F3] rounded-lg">
        <form onClick={handleUpdateBooking}>
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
              readOnly
              defaultValue={booking.price}
              placeholder="Due Amount"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="phone"
              defaultValue={booking.phone}
              placeholder="Phone"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="address"
              defaultValue={booking.address}
              placeholder="Present Address"
              variant="outlined"
              color="warning"
              size="lg"
            />
            <Input
              name="date"
              defaultValue={booking.date}
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
            Update Confirm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;

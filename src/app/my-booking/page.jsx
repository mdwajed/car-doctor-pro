"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const session = useSession();
  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/my-booking/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    console.log(data);
    setBookings(data?.myBooking);
  };
  const handleDelete = async (id) => {
    const deleted = await fetch(
      `http://localhost:3000/my-booking/api/booking/${id}`,
      {
        method: "DELETE",
      }
    );
    const res = await deleted.json();
    if (res?.response?.deletedCount > 0) {
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, [session]);
  return (
    <div className="max-w-7xl mx-auto">
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
          Bookings Details
        </h2>
        <h2 className="absolute bg-[#FF3811] text-white text-base py-3 px-6 w-56 flex justify-center items-center left-1/2 bottom-0 rounded-tl-xl">
          <Link href="/">
            <span>Home </span>
          </Link>
          <span> / Bookings </span>
        </h2>
      </div>
      <div className="my-8">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 0 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Title of Service</TableCell>
                <TableCell>Booking Date</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map(
                ({ name, serviceTitle, email, price, date, _id }) => (
                  <TableRow
                    key={_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{name}</TableCell>
                    <TableCell>{serviceTitle}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{price}</TableCell>
                    <TableCell>
                      <div className="flex gap-2 ml-8">
                        <Link href={`my-booking/update/${_id}`}>
                          {" "}
                          <Button variant="outlined">Edit</Button>
                        </Link>
                        <Button
                          onClick={() => handleDelete(_id)}
                          variant="outlined"
                          color="error"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BookingPage;

"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "../../app/MTailwind";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasketOutlined } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

const Nabvar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const session = useSession();
  console.log(session);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lg"
        color="black"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="black"
        className="p-1 font-normal"
      >
        <Link href="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="black"
        className="p-1 font-normal"
      >
        <Link href="/services" className="flex items-center">
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="black"
        className="p-1 font-normal"
      >
        <Link href="/my-booking" className="flex items-center">
          My Bookings
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="black"
        className="p-1 font-normal"
      >
        <Link href="/blog" className="flex items-center">
          Blog
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="black"
        className="p-1 font-normal"
      >
        <Link href="/contact" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar className="sticky shadow-none  bg-base-100 top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-white">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={60} height={20} />
          </Link>
          <div className="flex items-center gap-4 md:gap-24">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-3">
              <ShoppingBasketOutlined className="text-black" />
              <Search className="text-black text-3xl" />
              <Button
                variant="outlined"
                color="red"
                size="md"
                className="hidden lg:inline-block "
              >
                Appointment
              </Button>
              {session.data ? (
                <Button
                  onClick={() => signOut()}
                  variant="contained"
                  size="md"
                  color="red"
                >
                  <span>Log Out</span>
                </Button>
              ) : (
                <Link href="/login">
                  <Button variant="contained" size="md" color="red">
                    <span>Log In</span>
                  </Button>
                </Link>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="red"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button variant="contained" size="md" color="red" className="">
              <span>Log In</span>
            </Button>
            <Button variant="contained" color="red" size="md" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default Nabvar;

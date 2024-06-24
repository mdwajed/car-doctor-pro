"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";



const AboutUs = () => {
  return (
    <Card className="max-w-7xl mx-auto  flex-row h-[550px] shadow-none md:gap-24 my-12 ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-[460px] md:h-[473px] shrink-0 relative w-1/2"
      >
        <Image
          src="/assets/images/about_us/person.jpg"
          alt="card-image"
          width={400}
          height={400}
          className=" w-[80%] h-4/5 rounded-lg"
        />
        <Image
          src="/assets/images/about_us/parts.jpg"
          alt="card-image"
          width={400}
          height={400}
          className=" md:w-[327px] md:h-[332px]  absolute right-8 top-1/3 border-8 border-[#FFFFFF]"
        />
      </CardHeader>
      <CardBody className="w-1/2">
        <Typography className="mb-4 uppercase text-xl text-[#FF3811]">
          About Us
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-8 text-5xl font-bold"
        >
          We are qualified & of experience in this field
        </Typography>
        <Typography color="gray" className="mb-10 ">
          <small>
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </small>
        </Typography>
        <Typography color="gray" className="mb-12 ">
          <small>
            {" "}
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don not look even slightly
            believable.
          </small>
        </Typography>
        <Link href="#" className="inline-block">
          <Button className="bg-[#FF3811] text-white font-semibold py-4 text-base capitalize">
            Get More Info
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};
export default AboutUs;

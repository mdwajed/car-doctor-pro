"use client";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";

export default function ServiceCard({ service }) {
  const { img, title, price } = service;
  return (
  <div className="">
      <Card sx={{ width: 420 }}>
      <AspectRatio minHeight="" maxHeight="">
        <Image src={img} width={96} height={140} loading="lazy" alt={title} />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div className="w-full space-y-4">
          <Typography level="body-xs" className="text-xl">
            {" "}
            {title}
          </Typography>
          <Typography level="body-xs" className="text-red-900 text-base flex justify-between">
            Total price : $ {price}
            <ArrowRightAlt/>
          </Typography>
        </div>
      </CardContent>
    </Card>
  </div>
  );
}

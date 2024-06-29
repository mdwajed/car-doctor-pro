import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { Button } from "../../app/MTailwind";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const { img, title, price, _id } = service;
  return (
    <div className="">
      <Card sx={{ width: 420 }}>
        <AspectRatio minHeight="" maxHeight="">
          <Image src={img} width={96} height={140} loading="lazy" alt={title} />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div className="w-full h-24 space-y-3 my-2">
            <Typography level="body-xs" className="text-xl">
              {" "}
              {title}
            </Typography>
            <Typography
              level="body-xs"
              className="text-red-900 text-base flex justify-between items-center"
            >
              Total price : $ {price}
              <Link href={`services/${_id}`}>
                <Button variant="contained" size="md" color="red">
                  View Details
                </Button>
              </Link>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

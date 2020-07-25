import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/index";
import Banner from "../components/Banner/index";

export default function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms" subTitle="">
        <Link className="btn-primary"> Return Home</Link>
      </Banner>
    </Hero>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/index";
import Banner from "../components/Banner/index";

export default function Home() {
  return (
    <div>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at $299"
        >
          <Link className="btn-primary" to="/rooms">Our Rooms</Link>
        </Banner>
      </Hero>
    </div>
  );
}

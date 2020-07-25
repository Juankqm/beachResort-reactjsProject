import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/index";
import Banner from "../components/Banner/index";

export default function ErrorPage() {
  return (
    <Hero hero="defaultHero">
      <Banner title="404" subTitle="Page Not Found">
        <Link className="btn-primary" to="/">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
}

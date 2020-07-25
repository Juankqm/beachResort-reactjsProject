import React, { useState, useEffect } from "react";
//icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
//components
import Title from "../Title/index";

export default function Services() {
  const [infoServices, setInfoServices] = useState([{}]);
  useEffect(() => {
    setInfoServices([
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "loremp ipsum dolor sit amet consectetur adisipicing elit. Magni, corporis",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "loremp ipsum dolor sit amet consectetur adisipicing elit. Magni, corporis",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "loremp ipsum dolor sit amet consectetur adisipicing elit. Magni, corporis",
      },
      {
        icon: <FaBeer />,
        title: "Strongets Beers",
        info:
          "loremp ipsum dolor sit amet consectetur adisipicing elit. Magni, corporis",
      },
    ]);
  }, []);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {infoServices.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

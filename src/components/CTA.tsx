import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <div className="flex flex-col">
        <Link to="/contact" className="btn">
          Contact
        </Link>
        <div className="flex justify-between mt-2 flex-wrap">
          {socialLinks.map((social) => {
            return (
              <Link to={social.link} key={social.name}>
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTA;

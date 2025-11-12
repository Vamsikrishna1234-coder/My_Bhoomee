// FontAwesomeIcon.jsx
import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  facebook: faFacebookF,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
};

const FontAwesomeIcon = ({ icon, className = "" }) => (
  <FAIcon icon={icons[icon]} className={className} />
);

export default FontAwesomeIcon;

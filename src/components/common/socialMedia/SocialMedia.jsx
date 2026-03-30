import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faFacebookF,
    link: "https://www.facebook.com/share/18SRPUwACT/?mibextid=wwXIfr",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/mohhamed_hassan_ph?igsh=a2p3Z2Fra2Q5eWtk",
  },
  {
    icon: faLinkedin,
    link: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    icon: faWhatsapp,
    link: "https://wa.me/201123838885",
  },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md transition duration-300 hover:scale-110"
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="text-xl w-4.5 aspect-square"
      />
    </a>
  ));
};

export default SocialMedia;
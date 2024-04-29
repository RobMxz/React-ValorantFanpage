import "./styles.css";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
export const FooterList = () => {
  return (
    <div className="footer-list">
      <ul>
        <li>
          <a href="#">© 2024 ValorantFanPage</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
        <li>
          <a
            href="https://discordapp.com/users/393511896868847628"
            target="_blank"
          >
            <Icon as={IoLogoDiscord} boxSize="1.5em" />
          </a>
        </li>
        <li>
          <a href="https://github.com/RobMxz" target="_blank">
            <Icon as={FaGithub} boxSize="1.5em" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/roberto-paolo-palacios-chavez-67402124b/"
            target="_blank"
          >
            <Icon as={FaLinkedin} boxSize="1.5em" />
          </a>
        </li>
      </ul>
    </div>
  );
};

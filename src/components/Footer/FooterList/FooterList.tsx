import "./styles.css";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
export const FooterList = () => {
  return (
    <div className="footer-list">
      <ul>
        <li>
          <a href="https://facebook.com">© 2024 ValorantFanPage</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Terms of Service</a>
        </li>
        <li>
          <a>
            <Icon as={IoLogoDiscord} boxSize="1.5em" />
          </a>
        </li>
        <li>
          <a>
            <Icon as={FaGithub} boxSize="1.5em" />
          </a>
        </li>
        <li>
          <a>
            <Icon as={FaLinkedin} boxSize="1.5em" />
          </a>
        </li>
      </ul>
    </div>
  );
};

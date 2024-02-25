import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-primary px-5 py-0 mt-5">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold uppercase">
          <span>Flix</span>
        </div>
        <div className="flex text-xl">
          <FontAwesomeIcon
            className="text-[#1DA1F2] ml-2.5 hover:text-secondary"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="text-[#1877F2] ml-2.5 hover:text-secondary"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-[#833AB4] ml-2.5 hover:text-secondary"
            icon={faInstagram}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

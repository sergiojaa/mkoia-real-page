import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "@fortawesome/fontawesome-svg-core";

export default function Footer() {
  return (
    <footer className="bg-[#1C3345] mt-12 text-white py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between  items-center md:items-start max-w-5xl mx-auto gap-6">
        {/* ნავიგაცია */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold border-b pb-1 mb-2">ნავიგაცია</h3>
          <ul className="space-y-1">
            <li><a href="#">ჩვენ შესახებ</a></li>
            <li><a href="#">სერვისი</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold border-b pb-1 mb-2">ვმუშაობთ</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FontAwesomeIcon icon={faClock as Icon} />
            9:00AM - 6:00PM
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold border-b pb-1 mb-2">კონტაქტი</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              info@mkoia.ge

            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone as Icon} />
              +955 555 90 12 35
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot as Icon} />
              ნუცუბიძის 23
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        <p>2024 (შ.პ.ს მკოია) ყველა უფლება დაცულია</p>
      </div>
    </footer>
  );
}

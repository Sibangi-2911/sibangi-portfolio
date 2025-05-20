import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="pragya.baxipatra@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7008083489" Image={FiPhone} />
      <SingleInfo text="Odisha, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

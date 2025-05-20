import { FaGit } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "JAVA",
    icon: FaJava,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Gen AI",
    icon: GiArtificialIntelligence,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "Pandas",
    icon: SiFoodpanda,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Postman",
    icon: SiPostman,
  },
  {
    skill: "GIT",
    icon: FaGit,
  }
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

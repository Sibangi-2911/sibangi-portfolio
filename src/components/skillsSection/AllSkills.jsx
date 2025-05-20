import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGit } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";

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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
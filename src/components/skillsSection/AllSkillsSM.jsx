import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaNodeJs } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { TbBrandTerraform } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "JAVA",
    icon: FaJava,
  },
  {
    skill: "Spring Boot",
    icon: SiSpring,
  },
  {
    skill: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Azure",
    icon: VscAzureDevops,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "Kafka",
    icon: SiApachekafka,
  },
  {
    skill: "Terraform",
    icon: TbBrandTerraform,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Gen AI",
    icon: GiArtificialIntelligence,
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

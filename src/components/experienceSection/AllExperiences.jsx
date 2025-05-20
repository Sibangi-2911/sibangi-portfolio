import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Student",
    company: "Indira Gandhi Institute of Technology",
    date: "2022 - Till Date",
    responsibilities: [
      "Open source contributor by GirlScript Summer of Code",
      "Career Edge - Young Professional and Interview skills (TCS iON).",
      "Coding Ninjas Oops in python.",
    ],
  },
  {
    job: "Data Science And Business Analytics Intern",
    company: "The Sparks Foundation",
    date: "July 2024 – August 2024",
    responsibilities: [
      "Here I worked on various projects.",
      "The projects were based on Supervised learning and Unsupervised learning.",
      "Guided my fellow interns regarding their projects.",
    ],
  },
  ,
  {
    job: "Artificial Intelligence and machine Learning Intern",
    company: "EduSkills - AICTE",
    date: "July 2024 – September 2024",
    responsibilities: [
      "Here I gained knowledge and more related insights of AI-ML.",
      "Guided my fellow interns regarding their projects.",
      "Worked on various types of machine learning algos.",
    ],
  }
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

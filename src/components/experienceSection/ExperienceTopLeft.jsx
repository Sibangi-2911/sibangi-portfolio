import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="5" text="Projects" />
      </div>
      <p className="text-center">
        With 1+ year of experience building open source projects.
      </p>
      <ExperienceInfo number="$10K" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;

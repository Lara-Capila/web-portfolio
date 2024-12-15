import { workExperienceData } from "../../../utils/data";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="flex mt-6 gap-4 pl-3">
      <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

      <div className="flex flex-col gap-10">
        {workExperienceData.map((item, index) => (
          <TimelineItem
            key={index}
            jobTitle={item.jobTitle}
            company={item.company}
            jobType={item.jobType}
            duration={item.duration}
            stuffIDid={item.stuffIDid}
          />
        ))}
      </div>
    </div>
  );
}

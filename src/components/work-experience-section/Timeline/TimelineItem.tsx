"use client";
import Image from "next/image";
import styles from "./Timeline.module.css";

export default function TimelineItem({
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}: {
  jobTitle: string;
  company: string;
  jobType: string;
  duration: string;
  stuffIDid: string[];
}) {
  return (
    <div className="flex items-start gap-4 relative duration-1000">
      <Image
        src="/svgs/position-icon.svg"
        width={24}
        height={24}
        alt="current"
        className="absolute -translate-x-[29px] sm:-translate-x-8 left-0"
      />

      <div className="grid grid-cols-5 sm:flex items-start gap-4 pl-4">
        <div className={`${styles.timeline} col-span-4`}>
          <div className="leading-tight">
            <h1 className="text-2xl sm:text-[2rem] font-bold">{jobTitle}</h1>
            <p className="text-base sm:text-lg font-bold my-2 sm:my-3">
              {company} | {jobType}
            </p>
          </div>
          <p className="text-base sm:text-lg text-white/60 my-3">{duration}</p>

          <ul>
            {stuffIDid.map((stuff, index) => (
              <li key={index}>{stuff}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { PinLocation01Icon } from "hugeicons-react";
import { ComputerProgramming01Icon } from "hugeicons-react";
import { Calendar01Icon } from "hugeicons-react";

type WorkItemProps = {
  role: string;
  companyName: string;
  companyWebsiteUrl?: string;
  timePeriod: string;
  location: string;
};

export const WorkItem = ({
  role,
  companyName,
  timePeriod,
  location,
}: WorkItemProps) => {
  return (
    <div className="border-l-2 border-mainBorderColor pl-8 space-y-4">
      <p className="flex gap-2 ">
        <ComputerProgramming01Icon />
        {role} @ {companyName}
      </p>
      <div className="flex gap-4">
        <p className="flex gap-2">
          <Calendar01Icon />
          {timePeriod}
        </p>
        <p>•</p>
        <p className="flex gap-2">
          <PinLocation01Icon />
          {location}
        </p>
      </div>
    </div>
  );
};

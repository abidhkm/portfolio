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
        👨‍💻 {role} @ {companyName}
      </p>
      <div className="flex gap-4 text-secondaryTextColor flex-wrap">
        <p className="flex gap-2">📆 {timePeriod}</p>
        <p>•</p>
        <p className="flex gap-2">{location} 📍</p>
      </div>
    </div>
  );
};

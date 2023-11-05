import React, { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  description: string;
  stat?: string;
  loadingData?: boolean;
  defaultStat: string;
}

const Card = ({
  icon,
  description,
  stat,
  loadingData,
  defaultStat,
}: CardProps) => {
  return (
    <div
      className={`flex items-center justify-start py-3 w-full ${
        loadingData && "animate-pulse"
      }`}
    >
      {icon}

      {loadingData ? (
        <div className="space-y-2 pl-3">
          <div className="h-3 bg-iron rounded w-36"></div>
          <div className="h-3 bg-iron rounded w-[200px]"></div>
          <div className="h-3 bg-iron rounded w-[200px]"></div>{" "}
        </div>
      ) : (
        <div className="space-y-2 pl-3">
          <small>{description}</small>
          <p className="text-xl md:text-2xl">{stat || defaultStat}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

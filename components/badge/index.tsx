import React, { ReactNode } from "react";

interface Props {
  title: string;
  gradient: string;
  icon: ReactNode;
}

const Badge = ({ title, gradient, icon }: Props) => {
  return (
    <small
      className={`rounded-md text-lg bg-gradient-to-r ${gradient} pr-3 py-2`}
    >
      <i className="inline-block text-2xl pr-2 align-sub">{icon}</i>
      {title}
    </small>
  );
};

export default Badge;

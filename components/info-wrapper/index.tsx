import React from "react";
import Badge from "../badge";

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  gradient: string;
  title: string;
  className?: string;
}

const InfoWrapper = ({ icon, gradient, title, children, className }: Props) => {
  return (
    <section
      className={`w-full text-white bg-[#333333] p-5 border-2 border-border rounded-xl ${className}`}
    >
      <div className="py-2 w-full space-y-4 ">
        <Badge icon={icon} title={title} gradient={gradient} />
        {children}
      </div>
    </section>
  );
};

export default InfoWrapper;

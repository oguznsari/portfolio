import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl capitalize mb-8 text-center font-mono font-bold">
      {children}
    </h2>
  );
};

export default SectionHeading;

import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="flex screen-minus-header w-screen items-center justify-center bg bg-">
      {children}
    </div>
  );
};

export default PageWrapper;
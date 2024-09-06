import React from "react";
import { Skeleton } from "./skeleton";

const SkeletonCoursePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Skeleton className="w-full md:mx-16 mx-6 rounded-2xl h-[360px]" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-center flex flex-col gap-4">
          <h1 className="mt-8 text-center text-3xl font-medium">
            <Skeleton className="text-center w-auto h-[20px]" />
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-lg w-[85%] text-[#ccc] leading-[2rem]">
              <Skeleton className="text-center w-auto h-[20px]" />
            </p>
          </div>
        </div>
        <Skeleton className="w-full h-[50px] md:mx-16 mx-6" />
      </div>
    </div>
  );
};

export default SkeletonCoursePage;

import React from "react";
import { Skeleton } from "./skeleton";
import { Card } from "./card";

const SkeletonLoad = () => {
  return (
    <Card className="bg-transparent border-none flex flex-col gap-3">
      <Skeleton className="w-[400px] lg:w-[420px] bg-[#bbb] h-[210px] rounded-xl sm:w-[350px]" />
      <div className="flex flex-col gap-0]">
        <a
          // href={`/courses/${course.id}`}
          className="text-primaryc text-[1rem] transition hover:opacity-80"
        >
          <Skeleton className="w-[200px] h-[20px] mb-3 bg-[#bbb]" />
        </a>
        <a
          // href={"/"}
          className="text-[#777] text-sm font-medium transition hover:opacity-80"
        >
          <Skeleton className="w-[200px] h-[20px] bg-[#bbb]" />
        </a>
      </div>
    </Card>
  );
};

export default SkeletonLoad;

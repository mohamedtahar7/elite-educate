import React from "react";
import { Skeleton } from "./skeleton";
import { Card } from "./card";

const SkeletonLoad = () => {
  return (
    <Card className="bg-transparent border-none flex flex-col gap-3">
      <Skeleton className="w-[420px] bg-[#bbb] h-[240px] rounded-xl" />
      <div className="flex flex-col gap-0]">
        <a
          // href={`/courses/${course.id}`}
          className="text-primaryc text-[1rem] transition hover:opacity-80"
        >
          <Skeleton />
        </a>
        <a
          // href={"/"}
          className="text-[#777] text-sm font-medium transition hover:opacity-80"
        >
          <Skeleton />
        </a>
      </div>
    </Card>
  );
};

export default SkeletonLoad;

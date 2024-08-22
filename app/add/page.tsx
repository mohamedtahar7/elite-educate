import CourseUpload from "@/components/main/CourseUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center pt-32">
      <CourseUpload />
    </div>
  );
};

export default page;

import React from "react";
import { Card, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@prisma/client";
interface CourseProps {
  course: Course;
}
const CourseCard = ({ course }: CourseProps) => {
  return (
    <Link
      className="hover:opacity-80 transition"
      href={`/courses/${course.id}`}
    >
      <Card className="bg-transparent border-none flex flex-col gap-3">
        <Image
          width={1920}
          height={1080}
          className="flex rounded-xl items-center justify-center h-full w-full transition hover:opacity-80"
          alt="course thumbnail"
          src={course.thumbnail}
        />
        <div className="flex flex-col gap-0]">
          <Link
            href={`/courses/${course.id}`}
            className="text-primaryc text-[1rem] transition hover:opacity-80"
          >
            {course.title}
          </Link>
          <Link
            href={"/"}
            className="text-[#777] text-sm font-medium transition hover:opacity-80"
          >
            {course.instructor}
          </Link>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;

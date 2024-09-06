"use client";
import { getCourses } from "@/actions/adminActions";
import CourseCard from "@/components/main/CourseCard";
import Gradient from "@/components/main/Gradient";
import Spinner from "@/components/ui/Spinner";
import { courses } from "@/lib/courses";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonLoad from "@/components/ui/SkeletonLoad";

const page = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    try {
      const cors: any = await getCourses();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCourses(cors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    document.title = "Our Courses";
    fetchCourses();
  }, [courses]);
  return (
    <main className="md:pt-28 pt-20 pb-12 flex flex-col gap-5">
      {/* <Gradient /> */}
      <h1 className="text-center text-2xl z-40 font-medium">Our Courses</h1>
      {loading && (
        <div className="grid z-30 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
        </div>
      )}

      {courses && !loading && (
        <div className="grid z-30 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
          {courses.map((course, id) => (
            <CourseCard course={course} key={id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default page;

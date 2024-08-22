"use client";
import { getCourses } from "@/actions/adminActions";
import CourseCard from "@/components/main/CourseCard";
import Gradient from "@/components/main/Gradient";
import Spinner from "@/components/ui/Spinner";
import { courses } from "@/lib/courses";
import React, { useEffect, useState } from "react";

const page = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    const cors: any = await getCourses();
    setCourses(cors);
  };
  useEffect(() => {
    fetchCourses();
    setLoading(false);
  }, [courses]);
  return (
    <main className="md:pt-28 pt-20 pb-12 flex flex-col gap-5">
      {/* <Gradient /> */}
      <h1 className="text-center text-2xl z-40 font-medium">Our Courses</h1>
      {loading && <Spinner d="10" />}
      {courses && (
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

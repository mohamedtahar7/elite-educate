"use client";
import { getCourseById } from "@/actions/adminActions";
import { Course } from "@prisma/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Player from "next-video/player";
import Spinner from "@/components/ui/Spinner";
import AddComment from "@/components/main/AddComment";
import CommentCard from "@/components/main/CommentCard";
import ReactPlayer from "react-player";
import { useAuth, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const page = () => {
  const { courseId } = useParams();
  const { user } = useUser();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const customTheme = {
    primaryColor: "#00aeff",
  };
  const fetchCourse = async () => {
    const cors: any = await getCourseById(courseId);
    setCourse(cors);
  };
  useEffect(() => {
    fetchCourse();
    setLoading(false);
  }, [course]);
  if (!user) {
    return (
      <div className="py-32 h-[90vh] text-center md:mt-0 w-full flex flex-col gap-5 items-center">
        {/* <h1 className="md:text-6xl text-2xl font-medium">
        We're Reshaping <br /> the Education, <br /> For Good.
      </h1> */}
        <h1 className="md:text-5xl text-2xl font-medium ">
          You're not logged in to Elite Educate
        </h1>
        <a href={"/sign-up"}>
          <Button className="py-6 px-7 flex items-center justify-center bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl">
            Get Started
          </Button>
        </a>
      </div>
    );
  }
  return (
    <section className="pt-32">
      {course ? (
        <div>
          <div className="flex items-center justify-center">
            <div
              className="w-full md:mx-16 mx-6 rounded-2xl bg-no-repeat bg-center bg-cover h-[360px]"
              style={{ backgroundImage: `url(${course?.thumbnail})` }}
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-center flex flex-col gap-4">
              <h1 className="mt-8 text-center text-3xl font-medium">
                {course?.title} Full Class.
              </h1>
              <div className="flex items-center justify-center">
                <p className="text-lg w-[85%] text-[#ccc] leading-[2rem]">
                  {course?.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:mx-16 mx-6 mb-8 rounded-2xl">
              <div className="">
                <Player src={course.video} poster={course.thumbnail} />
              </div>
            </div>
            <AddComment id={course?.id} />
            {course?.comments.length === 0 ? (
              <h1 className="md:mx-16 mx-6 mb-6">No Comments yet</h1>
            ) : (
              <div className="md:mx-16 mb-10 mx-6 flex flex-col gap-4">
                <h1 className="text-xl">Comments : </h1>
                <div className="flex flex-col gap-6">
                  {course?.comments.map((cmt, id) => (
                    <CommentCard comment={cmt} key={id} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Spinner d="10" />
      )}
      {/* {loading ? (
        <Spinner d="10" />
      ) : (
        <div>
          <div className="flex items-center justify-center">
            <div
              className="w-full md:mx-16 mx-6 rounded-2xl bg-no-repeat bg-center bg-cover h-[360px]"
              style={{ backgroundImage: `url(${course?.thumbnail})` }}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="mt-8 text-center text-3xl font-medium">
              {course?.title} Full Class.
            </h1>
            <div className="md:mx-16 mx-6 mb-8 rounded-2xl">
              <Player
                className=""
                theme="#00aeff"
                src={course?.video}
                poster={course?.thumbnail}
              />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default page;

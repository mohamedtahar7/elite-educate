"use client";
import { getCourseById, getUserById } from "@/actions/adminActions";
import { Course, User } from "@prisma/client";
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
import SkeletonCoursePage from "@/components/ui/SkeletonCoursePage";
import { createTestCheckout } from "@/actions/paymentActions";
import LikeButton from "@/components/ui/LikeButton";
import SaveButton from "@/components/ui/SaveButton";
import DislikeButton from "@/components/ui/DislikeButton";
const page = () => {
  const { courseId } = useParams();
  const { userId } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [checkUrl, setCheckUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    const url: any = await createTestCheckout();
    setCheckUrl(url.checkout_url);
  };
  const fetchCourseAndUser = async () => {
    try {
      const cors: any = await getCourseById(courseId);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCourse(cors);
      if (userId) {
        const usr: any = await getUserById(userId);
        setUser(usr);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourseAndUser();
    fetchUrl();
    document.title = `${
      !course?.title ? "Elite Educate - Course Page" : course?.title
    }`;
  }, [course]);
  // if (!user) {
  //   return (
  //     <div className="py-32 h-[90vh] text-center md:mt-0 w-full flex flex-col gap-5 items-center">
  //       {/* <h1 className="md:text-6xl text-2xl font-medium">
  //       We're Reshaping <br /> the Education, <br /> For Good.
  //     </h1> */}
  //       <h1 className="md:text-5xl text-2xl font-medium ">
  //         You're not logged in to Elite Educate
  //       </h1>
  //       <a href={"/sign-up"}>
  //         <Button className="py-6 px-7 flex items-center justify-center bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl">
  //           Get Started
  //         </Button>
  //       </a>
  //     </div>
  //   );
  // }
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
            {user && user?.subscribed ? (
              <div>
                <h1 className="text-center mb-3 text-2xl font-medium">
                  The Full Course :
                </h1>
                <div className="flex flex-col gap-4 items-center md:mx-16 mx-6 mb-8 rounded-2xl">
                  <div className="">
                    <Player src={course.video} poster={course.thumbnail} />
                  </div>
                  <div className="flex items-center justify-end gap-6 py-3 px-4 rounded-full bg-black/40">
                    <LikeButton state={true} />
                    <DislikeButton state={true} />
                    <SaveButton state={true} />
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
            ) : (
              <a
                href={!user ? "/sign-up" : checkUrl}
                className="py-4 text-center mb-10 md:mx-16 mx-6 px-5 flex items-center justify-center bg-primaryc text-[1rem] text-[#111] font-normal hover:opacity-90 transition uppercase rounded-xl"
              >
                {!user && "Sign Up and Subscribe to Access The Course"}
                {user &&
                  !user?.subscribed &&
                  "Subscribe to Elite Educate To Access The Course"}
              </a>
            )}
          </div>
        </div>
      ) : (
        <SkeletonCoursePage />
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

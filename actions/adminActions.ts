"use server";
import { db } from "@/lib/db";
import { Course, User } from "@prisma/client";

export async function createUser(user: any) {
  const createdUser = await db.user.create({
    data: {
      clerkId: user.clerkId,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      img: user.img,
    },
  });
}
export async function addCourse(course: Course) {
  const result = await db.course.create({
    data: {
      title: course.title,
      description: course.description,
      instructor: course.instructor,
      thumbnail: course.thumbnail,
      video: course.video,
      comments: course.comments,
    },
  });
}

export async function getCourses() {
  try {
    const courses = await db.course.findMany();
    return courses;
  } catch (error) {
    console.log(error);
  }
}
export async function getCourseById(id: any) {
  try {
    const course = await db.course.findUnique({
      where: {
        id: id,
      },
    });
    return course;
  } catch (error) {
    console.log(error);
  }
}
export async function addComment(id: any, comment: any) {
  const course = await getCourseById(id);
  const commentsArray = course?.comments;
  const comments = [comment, ...course!.comments];
  try {
    const newCourse = await db.course.update({
      where: {
        id: id,
      },
      data: {
        comments: comments,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

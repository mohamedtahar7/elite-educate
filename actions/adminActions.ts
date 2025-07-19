"use server";
import { db } from "@/lib/db";
import { Course, User } from "@prisma/client";

export async function createUser(user: any) {
  const createdUser = await db.user.create({
    data: {
      email: user.email,
      userName: user.userName,
      img: "https://i.pinimg.com/736x/a2/32/4e/a2324e4fcb6e9f42df855bd929aa43b4.jpg",
    },
  });
}
export async function getUserById(id: any) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
export async function subscribeUser(id: any) {
  try {
    const user = await db.user.update({
      where: {
        id: id,
      },
      data: {
        subscribed: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
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

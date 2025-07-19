"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Spinner from "../ui/Spinner";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { addCourse } from "@/actions/adminActions";
import { Textarea } from "../ui/textarea";
const CourseUpload = () => {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  const [thumb, setThumb] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageProgress, setImageProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const id = title;
  const uploadVideo = async (video: any) => {
    const data = new FormData();
    data.append("file", video);
    data.append("upload_preset", "course_upload");
    try {
      let api = `https://api.cloudinary.com/v1_1/dzrmb6yah/video/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      alert(error);
    }
  };
  const uploadImg = async (img: any) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "course_thumb_upload");
    try {
      let api = `https://api.cloudinary.com/v1_1/dzrmb6yah/image/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = async (
    id: any,
    t: string,
    i: string,
    d: string,
    thumb: any,
    vid: any
  ) => {
    setLoading(true);
    const thumbLink = await uploadImg(thumb);
    const videoLink = await uploadVideo(vid);
    const c = {
      id,
      title: t,
      description: d,
      instructor: i,
      thumbnail: thumbLink,
      video: videoLink,
      comments: [],
    };
    try {
      const course = await addCourse(c);
      setLoading(false);
      toast.success(`${c.title} has been added successfully!`);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(id, title, instructor, description, thumb, video);
      }}
      className="flex flex-col gap-4 p-10 rounded-xl bg-white "
    >
      <Toaster richColors />
      <h1 className="text-3xl text-[#222] font-medium">
        Upload The Course Video
      </h1>
      <Input
        onChange={(e) => setTitle(e.target.value)}
        className="text-[#222]"
        type="text"
        placeholder="Course Title"
      />
      <Input
        onChange={(e) => setInstructor(e.target.value)}
        className="text-[#222]"
        type="text"
        placeholder="Course Instructor"
      />
      <Textarea
        rows={5}
        className="text-[#222]"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Course Description"
      />
      <label htmlFor="thumb" className="text-[#222] font-medium text-sm -mb-2">
        Course Thumbnail
      </label>
      <Input
        className="text-[#222]"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setThumb(e.target.files[0]);
          }
        }}
        id="thumb"
        type="file"
      />
      <label htmlFor="video" className="text-[#222] font-medium text-sm -mb-2">
        Course Video
      </label>
      <Input
        className="text-[#222]"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setVideo(e.target.files[0]);
          }
        }}
        id="video"
        type="file"
      />
      <Button
        type="submit"
        className="bg-[#222] flex items-center gap-2 text-primaryc rounded-lg transition hover:opacity-80"
      >
        {loading ? <Spinner d="8" /> : "Upload Course"}
      </Button>
    </form>
  );
};

export default CourseUpload;

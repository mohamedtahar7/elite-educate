"use client";
import React from "react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import { Toaster, toast } from "sonner";
import { addComment } from "@/actions/adminActions";
interface AddComentProps {
  id: any;
}
const AddComment = ({ id }: AddComentProps) => {
  const { user } = useUser();
  const [comment, setComment] = useState("");
  const handleSubmit = async (
    id: any,
    username: any,
    imgUrl: any,
    comment: any
  ) => {
    const toAddComment = { username, imgUrl, comment };
    try {
      const addedComment = await addComment(id, toAddComment);
      toast.success("Comment Added!");
    } catch (error) {
      toast.error("Comment adding failed! check your connection");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(id, user?.fullName, user?.imageUrl, comment);
        setComment("");
      }}
      className="flex items-center gap-3 md:mx-16 mx-6 mb-10"
    >
      <Toaster richColors />
      <Input
        value={comment}
        placeholder="Add a comment"
        onChange={(e) => setComment(e.target.value)}
        className="w-full text-[#222]"
        type="text"
      />
      <Button className="bg-[#222] text-primaryc rounded-lg transition hover:opacity-80">
        Comment
      </Button>
    </form>
  );
};

export default AddComment;

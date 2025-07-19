"use client";
import { Comment } from "@prisma/client";
import React from "react";
interface CommentCardProps {
  comment: Comment;
}
const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="flex items-start gap-2">
      <img
        src={comment?.imgUrl}
        alt="user pfp"
        className="h-12 w-12 rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="opacity-60">{comment?.username}</h1>
        <h2>{comment?.comment}</h2>
      </div>
    </div>
  );
};

export default CommentCard;

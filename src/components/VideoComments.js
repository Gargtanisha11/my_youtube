import React from "react";
import useVideoComment from "../utils/hooks/useVideoComment";
import CommentCard from "./CommentCard";

const VideoComments = ({ vdId}) => {
  const commentList = useVideoComment(vdId);

  return (
    <div className="my-8">
      {commentList.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default VideoComments;

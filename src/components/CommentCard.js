import React from "react";

const CommentCard = ({comment}) => {
    //comment.snippet.topLevelComment.snippet.authorProfileImageUrl
   
    return (
    <div className="flex m-4">
        <div className="px-4">
      <img className=" rounded-full w-12 h-12 cursor-pointer " src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" />
      </div><div >
        <h1 className="font-semibold">@{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h1>
        <h1>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</h1>
        <div className="flex">
          <button className=" rounded-full p-2 hover:bg-stone-200 active:bg-stone-50 m-2">👍🏻</button>
          <h1 className=" mr-2 my-5">{comment?.snippet?.topLevelComment?.snippet?.likeCount}</h1>
          <button className="rounded-full p-2 hover:bg-stone-200 active:bg-stone-50 m-2">👎🏻</button>
          <button className="rounded-full px-4 py-1 hover:bg-stone-200 active:bg-stone-50 m-2 text-sm">Reply {comment.snippet.totalReplyCount}</button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

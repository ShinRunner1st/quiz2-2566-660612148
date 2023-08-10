"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <PostOwner
          userImagePath={"/profileImages/profile.jpg"}
          username={"Norrawich Sombutnan 660612148"}
          postOwenerText={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          likeNum={100}
        ></PostOwner>
        {comments &&
          comments.map((comment, i) => {
            return (
              <Comment
                key={comment.username + i}
                userImagePath={comment.userImagePath}
                username={comment.username}
                commentText={comment.commentText}
                likeNum={comment.likeNum}
                replies={comment.replies}
              ></Comment>
            );
          })}
      </div>
    </div>
  );
}

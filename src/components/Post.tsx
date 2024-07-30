import React from "react";
import Image from "next/image";
import Comments from "@/components/Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27305798/pexels-photo-27305798/free-photo-of-african-woman-in-front-of-modern-building.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/929284/pexels-photo-929284.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className="object-cover rounded"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex
          eu orci ullamcorper laoreet. Sed feugiat, nisi in gravida molestie,
          massa velit luctus turpis, ac lacinia lectus metus sit amet nulla.
          Vivamus auctor, nunc sed aliquet pretium, felis erat ullamcorper
          libero, at dapibus turpis ligula nec felis. Proin et ante vel eros
          pellentesque rutrum. Pellentesque habitant morbi tristique sen
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              1323<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              1323<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              1323<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;

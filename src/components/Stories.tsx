import React from "react";
import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm">
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/27328444/pexels-photo-27328444/free-photo-of-efiyo_pictures.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
            alt={""}
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;

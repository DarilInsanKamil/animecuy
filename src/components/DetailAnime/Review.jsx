import Image from "next/image";
import React from "react";

const Review = ({ data }) => {
  const limit = data?.data.slice(0, 2);

  return (
    <div className='mt-7 border-t-2'>
      <p className='font-bold text-lg my-4'>Review</p>
      {limit.map((res, idx) => {
        return (
          <div>
            <div className="flex items-center gap-2 mt-4  ">
              <Image src={res.user.images.webp.image_url} width={40} height={40} alt="...."/>
              <p className="font-bold">{res.user.username}</p>
            </div>
            <p className="line-clamp-3">{res.review}</p>
            <button>lihat selengkapnya</button>
          </div>
        );
      })}
    </div>
  );
};

export default Review;

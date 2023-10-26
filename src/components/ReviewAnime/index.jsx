import Image from "next/image";
import React from "react";

const ReviewAnime = ({ data }) => {
  return (
    <div>
      {data?.data.map((res, idx) => {
        return (
          <div key={idx} className='text-color-primary'>
            <div>
              <Image src={res.user.images.webp.image_url} width={60} height={60} alt="..." className='object-contain'/>
              <p>{res.user.username}</p>
              <p>{res.score}</p>
            </div>
            <p className='line-clamp-3'>{res.review}</p>
            <button className='bg-color-secondary text-color-primary hover:text-color-dark hover:bg-color-accent'>Show more</button>

            <div>
                <p>Funny: {res.reactions.funny}</p>
                <p>Nice: {res.reactions.nice}</p>
                <p>Love it: {res.reactions.love_it}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewAnime;

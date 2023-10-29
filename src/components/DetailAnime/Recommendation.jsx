import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recommendation = ({ data }) => {
  const limit = data?.data.slice(0, 4);
  return (
    <div>
      <h3 className="text-xl font-bold">Rekomendasi anime</h3>
      {limit.map((res, idx) => {
        return (
          <Link href={`/detail/${res.entry.mal_id}`}>
            <div
              key={idx}
              className="flex gap-4 mt-4 bg-color-secondary md:flex-row flex-col rounded-md p-2 items-center"
            >
              <Image
                src={res.entry.images.webp.image_url}
                width={60}
                height={60}
                alt="..."
              />
              <p className="text-md font-bold">{res.entry.title}</p>
            </div>
          </Link>
        );
      })}

    </div>
  );
};

export default Recommendation;

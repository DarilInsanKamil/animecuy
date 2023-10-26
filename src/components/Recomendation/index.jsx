"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimeList from "../Animelist";
import { Info } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const RecomendAnime = ({ data }) => {
  const [nextRekomen, setNextRekomen] = useState(0);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(4);
  const router = useRouter();

  const handleShowMore = () => {
    if (limit < 100) {
      setNextRekomen((prevState) => prevState + 4);
      setLimit((prevState) => prevState + 4);
    }
  };
  const map1 = data?.data.map((res) => res.entry);
  const slicer = map1.slice(0, limit);
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2 text-color-primary">
        {slicer.map((res, idx) => {
          return (
            <div className="transition-all bg-color-secondary p-2 rounded-md">
              <div key={idx}>
                <Image
                  src={res[0].images.webp.image_url}
                  width={350}
                  height={350}
                  alt={res[0].title}
                  className="rounded-md w-full max-h-64 object-cover"
                  draggable="false"
                  priority="true"
                />

                <p className="line-clamp-1 font-bold md:text-lg text-md mt-2">
                  {res[0].title}
                </p>
                <button
                  onClick={() => router.push(`/detail/${res[0].mal_id}`)}
                  className="flex gap-2 bg-color-dark p-2 rounded-md items-center w-full mt-4 hover:bg-color-accent hover:text-color-dark transition-all"
                >
                  <Info size={20} />
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleShowMore}
        className="bg-color-secondary h-fit text-color-accent p-2 w-full mt-4 hover:bg-color-accent hover:text-color-dark rounded-md"
      >
        ShowMore
      </button>
    </div>
  );
};

export default RecomendAnime;

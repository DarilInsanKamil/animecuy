"use client";
import { Info, Play, Star } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import YouTube from "react-youtube";

const AnimeList = ({ data }) => {
  const router = useRouter();
  const [playVideo, setPlayVideo] = useState(true);
  const option = {
    width: "350",
    height: "350",
  };
  const handleCloseButton = () => {
    setPlayVideo((prevState) => !prevState);
  };
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2 text-color-primary">
      {data &&
        data.data?.map((res) => {
          return (
            <div className="transition-all bg-color-secondary p-2 rounded-md">
              <div key={res.mal_id}>
                <Image
                  src={res.images.webp.image_url}
                  width={350}
                  height={350}
                  alt={res.title}
                  className="rounded-md w-full max-h-64 object-cover"
                  draggable="false"
                  priority="true"
                />

                <p className="overflow-hidden text-ellipsis font-bold md:text-lg text-md mt-2">
                  {res.title}
                </p>
                <div className="flex items-center gap-1">
                  <p>{res.score}</p>
                  <Star size={18} weight="fill" className="text-color-accent" />
                </div>
              </div>
              <div className="flex gap-2 mt-2 md:flex-row flex-col">
                <button
                  onClick={handleCloseButton}
                  className="flex gap-2 bg-color-dark p-2 rounded-md items-center w-full hover:bg-color-accent hover:text-color-dark transition-all"
                >
                  <Play size={20} weight="fill"/> Watch
                </button>
                <button
                  onClick={() => router.push(`/detail/${res.mal_id}`)}
                  className="flex gap-2 bg-color-dark p-2 rounded-md items-center w-full hover:bg-color-accent hover:text-color-dark transition-all"
                >
                  <Info size={20} />
                  Details
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default AnimeList;

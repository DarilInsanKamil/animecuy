"use client";
import Image from "next/image";
import VideoPlayer from "../utilities/VideoPlayer";
import { Play, Star } from "@phosphor-icons/react";
const DetailAnime = ({ data }) => {
  return (
    <div className="flex gap-8 md:px-12 px-6 md:py-6 py-2 md:flex-row flex-col">
      <Image
        src={data.data.images.webp.image_url}
        width={400}
        height={400}
        className="rounded-md"
      />
      <div>
        <p className="font-bold text-3xl">
          {data.data.title} || {data.data.title_japanese}
        </p>
        <p>Rated: {data.data.rating} </p>
        <p>Status: {data.data.status}</p>
        <p>Source: {data.data.source}</p>
        <p>Score: {data.data.score}</p>
        <p>Rank: {data.data.rank}</p>
        <p>Popularity: {data.data.popularity}</p>
        <p className="max-w-2xl">{data.data.synopsis}</p>
      </div>
      <section></section>
      <section>
        <VideoPlayer videoId={data.data.trailer.youtube_id} />
      </section>
    </div>
  );
};

export default DetailAnime;

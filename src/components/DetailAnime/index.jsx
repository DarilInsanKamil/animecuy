"use client";
import Image from "next/image";
import VideoPlayer from "../utilities/VideoPlayer";
import { Play, Star } from "@phosphor-icons/react";
import Characters from "./Characters";
import Review from "./Review";
import Recommendation from "./Recommendation";
import styles from "./detail.module.css";
const DetailAnime = ({ data, review, character }) => {
  return (
    <div className="grid md:grid-cols-12 md:gap-5 grid-cols-6">
      <div className="md:col-start-1 col-start-2 md:col-span-3 col-span-4 flex flex-col items-center">
        <p className="md:hidden block font-bold text-3xl text-center mb-4">{data.data.title}</p>
        <Image
          src={data.data.images.webp.image_url}
          width={223}
          height={280}
          className="rounded-md"
          draggable="false"
        />
        <div className="mt-4">
          <p>
            <span className="font-bold">Rated:</span> {data.data.rating}{" "}
          </p>
          <p>
            <span className="font-bold">Status:</span> {data.data.status}
          </p>
          <p>
            <span className="font-bold">Source:</span> {data.data.source}
          </p>
          <p>
            <span className="font-bold">Score:</span> {data.data.score}
          </p>
          <p>
            <span className="font-bold">Rank:</span> {data.data.rank}
          </p>
          <p>
            <span className="font-bold">Popularity:</span>{" "}
            {data.data.popularity}
          </p>
        </div>
      </div>
      <div className="md:col-start-4 col-start-1 md:col-span-9 col-span-6 md:p-0 p-4">
        <p className="font-bold text-3xl md:text-left text-center hidden md:block">{data.data.title}</p>
        <p className="max-w-2xl mt-5">{data.data.synopsis}</p>
        <section>
          <Characters data={character} />
        </section>
        <section>
          <Review data={review}/>
        </section>
      </div>
      <section>
        <VideoPlayer videoId={data.data.trailer.youtube_id} />
      </section>
    </div>
  );
};

export default DetailAnime;

"use client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

const Characters = ({ data }) => {
  const [start, setStart] = useState(0);
  const [next, setNext] = useState(4);

  const limit = data?.data.slice(start, next);
  const voice_actors = data?.data.flatMap((item) => item.voice_actors);
  const length = voice_actors.length;
  const limit_voice_actors = voice_actors.slice(start, next);

  const handleNext = () => {
    if (start < length) {
      setStart((prevState) => prevState + 4);
      setNext((prevState) => prevState + 4);
    }
  };
  const handlePrev = () => {
    if (start > 0) {
      setStart((prevState) => prevState - 4);
      setNext((prevState) => prevState - 4);
    }
  };

  return (
    <div>
      <div className="flex justify-between mt-7 items-center">
        <h3 className="font-bold text-lg">Character dan Voice actor</h3>
        <div className="md:mr-7 flex gap-1">
          <button onClick={handlePrev}><CaretLeft size={20} /></button>
          <button onClick={handleNext}><CaretRight size={20} /></button>
        </div>
      </div>
      <div className="flex gap-2 mt-7">
        {limit.map((res, idx) => {
          return (
            <div key={idx}>
              <Image
                src={res.character.images.webp.image_url}
                width={70}
                height={70}
                alt="..."
                draggable="false"
                className="rounded-sm"
              />
              <p className="max-w-small truncate text-lg font-bold">
                {res.character.name}
              </p>
              <p>{res.role}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 mt-4">
        {limit_voice_actors.map((res, idx) => {
          return (
            <div key={idx}>
              <Image
                src={res.person.images.jpg.image_url}
                width={70}
                height={70}
                alt="..."
                draggable="false"
                className="rounded-sm"
              />
              <p className="max-w-small truncate text-lg font-bold">
                {res.person.name}
              </p>
              <p className="text-color-secondary">{res.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;

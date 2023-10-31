"use client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

const Characters = ({ data }) => {
  const [start, setStart] = useState(0);
  const [next, setNext] = useState(5);

  const limit = data?.data.slice(start, next);
  const voice_actors = data?.data.flatMap((item) => item.voice_actors);
  const filterDub = voice_actors?.filter(
    (lang) => lang.language === "Japanese"
  );
  const length = filterDub.length;
  const limit_voice_actors = filterDub.slice(start, next);

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
      <div className="mt-7">
        <h3 className="font-bold text-lg text-left">Character dan Voice actor</h3>
        {/* <div className="md:mr-7 flex gap-1">
          <button onClick={handlePrev}><CaretLeft size={20} /></button>
          <button onClick={handleNext}><CaretRight size={20} /></button>
        </div> */}
      </div>
      <div className="flex md:gap-2 gap-1 flex-wrap">
        {limit?.map((res, idx) => {
          return (
            <div key={idx}>
              <Image
                src={res.character.images.webp.image_url}
                width={100}
                height={100}
                alt="..."
                draggable="false"
                className="rounded-sm"
              />
              <p className="max-w-small truncate text-lg font-bold">
                {res.character.name}
              </p>
              <p>{res.role}</p>
              <div>
                {res.voice_actors.map((resx, index) => {
                  return (
                    <div key={index}>
                      {resx.language == "Japanese" ? (
                        <>
                        <Image src={resx.person.images.jpg.image_url} width={100} height={100} alt="..."/>
                        <p className="max-w-small truncate text-lg font-bold">{resx.person.name}</p>
                        </>
                      ) : null}
                      {/* <p>{resx.language}</p> */}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex gap-2 mt-4">
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
      </div> */}
    </div>
  );
};

export default Characters;

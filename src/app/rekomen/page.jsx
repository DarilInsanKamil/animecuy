import RecomendAnime from "@/components/Recomendation";
import { getData } from "@/libs/getData";
import React from "react";

const Page = async () => {

  const rekomenAnime = await getData("recommendations/anime");

  return (
    <main className="md:p-4 p-2">
      <RecomendAnime data={rekomenAnime} />
    </main>
  );
};

export default Page;

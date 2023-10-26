import ReviewAnime from "@/components/ReviewAnime";
import { getData } from "@/libs/getData";
import React from "react";

const Page = async () => {
  const reviewData = await getData("reviews/anime", "limit=8");

//   console.log(reviewData)
  return <div><ReviewAnime data={reviewData}/></div>;
};

export default Page;

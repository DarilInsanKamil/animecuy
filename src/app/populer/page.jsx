"use client";
import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { getData } from "@/libs/getData";
import { Suspense, useEffect, useState } from "react";
import Loading from "../loading";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    const populer = await getData("top/anime", `page=${page}`);
    setTopAnime(populer);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <main className="p-4">
      <HeaderMenu title={`Populer Anime #${page}`} />
      <section>
        <Suspense fallback={<Loading/>}>
        <AnimeList data={topAnime} />
        </Suspense>
      </section>
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </main>
  );
};

export default Page;

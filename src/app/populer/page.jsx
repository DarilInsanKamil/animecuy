"use client";
import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { Suspense, useEffect, useState } from "react";
import Loading from "../loading";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await res.json();
    setTopAnime(data);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <main className="p-4">
      <HeaderMenu title={`Populer Anime #${page}`} />
      <section>
          <AnimeList data={topAnime} />
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

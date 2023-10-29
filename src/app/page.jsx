import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import RecomendAnime from "@/components/Recomendation";
import { getData, getNestedAnimeResponse } from "../libs/getData";

const Page = async () => {
  const topAnime = await getData("top/anime", "limit=8");
  let rekomenAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  
  const startIndex = Math.floor(Math.random() * (rekomenAnime.length - 4));

  rekomenAnime = {
    data: rekomenAnime.slice(startIndex, startIndex + 4),
  };
  return (
    <main className="md:p-4 p-2">
      <section>
        <Header
          title={"Top Anime"}
          textLink={"Lihat semua"}
          href={"/populer"}
        />
        <AnimeList data={topAnime} />
      </section>
      <section>
        <Header
          title={"Rekomen Anime"}
          // textLink={"Lihat semua"}
          href={"/populer"}
        />
        <AnimeList data={rekomenAnime} />
      </section>
    </main>
  );
};
export default Page;

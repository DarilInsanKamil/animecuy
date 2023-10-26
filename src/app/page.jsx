import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import RecomendAnime from "@/components/Recomendation";
import { getData } from "../libs/getData";


const Page = async () => {

const topAnime = await getData('top/anime', "limit=8")
const rekomenAnime = await getData('recommendations/anime')

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
      <section className="mt-8">
        <Header
          title={"Rekomen Anime"}
          textLink={"Lihat semua"}
          href={"/rekomen"}
        />
        <RecomendAnime data={rekomenAnime} />
      </section>
    </main>
  );
};
export default Page;

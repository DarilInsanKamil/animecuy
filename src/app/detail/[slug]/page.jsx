import DetailAnime from "@/components/DetailAnime";
import Recommendation from "@/components/DetailAnime/Recommendation";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import { getData } from "@/libs/getData";

const Page = async ({ params }) => {
  const id = params.slug;
  const detailAnime = await getData(`anime/${id}`)
  const rekomenAnime = await getData(`anime/${id}/recommendations`)
  const characterAnime = await getData(`anime/${id}/characters`)
  const reviewAnime = await getData(`anime/${id}/reviews`)
  return (
    <div className="grid md:grid-cols-12 grid-cols-6 mt-7 text-color-primary">
      <section className="md:col-start-2 col-start-1 md:col-span-8 col-span-6">
        <DetailAnime data={detailAnime} character={characterAnime} review={reviewAnime}/>
      </section>
      <section className="md:col-start-10 md:col-span-2 hidden md:block">
        <Recommendation data={rekomenAnime}/>
      </section>
    </div>
  );
};

export default Page;

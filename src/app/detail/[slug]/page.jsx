import DetailAnime from "@/components/DetailAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import { getData } from "@/libs/getData";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.slug;
  const detailAnime = await getData(`anime/${id}`)
  return (
    <div>
      <HeaderMenu title={detailAnime.data.title} />
      <section className="text-color-primary">
        <DetailAnime data={detailAnime} />
      </section>
    </div>
  );
};

export default Page;

import DetailAnime from "@/components/DetailAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
  );
  const topAnime = await res.json();
  return (
    <div>
      <HeaderMenu title={topAnime.data.title} />
      <section className="text-color-primary">
        <DetailAnime data={topAnime} />
      </section>
    </div>
  );
};

export default Page;

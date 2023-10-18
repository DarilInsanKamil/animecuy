import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ data }) => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2 text-color-primary'>
      {data &&
        data.data?.map((res) => {
          return (
            <Link href={`/detail/${res.mal_id}`} key={res.mal_id} className='hover:text-color-accent transition-all bg-color-secondary p-2 rounded-md'>
              <Image
                src={res.images.webp.image_url}
                width={350}
                height={350}
                alt={res.title}
                className="rounded-md w-full max-h-64 object-cover"
                draggable="false"
                priority="true"
              />
              <p className="overflow-hidden text-ellipsis font-bold md:text-lg text-md mt-2">
                {res.title}
              </p>
            </Link>
          );
        })}
    </div>
  );
};
export default AnimeList;

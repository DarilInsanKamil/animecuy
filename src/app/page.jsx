import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/Header';

const Page = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await res.json();

  return (
    <main className='md:p-4 p-2'>
      <section>
        <Header title={"Top Anime"} textLink={"Lihat semua"} href={"/populer"} />
        <AnimeList data={topAnime} />
      </section>
    </main>
  )
}
export default Page;

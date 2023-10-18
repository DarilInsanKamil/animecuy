import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/Header';

const Page = async ({ params }) => {
    const keyword = params.slug;
    const decodedKeyword = decodeURI(keyword)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const topAnime = await res.json();

    return (
        <main className='p-4 '>
            <section>
                <Header title={`Pencarian untuk: ${decodedKeyword}`} href={"/pupuler"} />
                <AnimeList data={topAnime} />
            </section>
        </main>
    )
}
export default Page;

import AnimeList from '@/components/Animelist'
import Header from '@/components/Animelist/Header';
import { getData } from '@/libs/getData';

const Page = async ({ params }) => {
    const keyword = params.slug;
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getData("anime" , `q=${decodedKeyword}`)
    return (
        <main className='p-4 '>
            <section>
                <Header title={`Pencarian untuk: ${decodedKeyword}`} href={"/pupuler"} />
                <AnimeList data={searchAnime} />
            </section>
        </main>
    )
}
export default Page;

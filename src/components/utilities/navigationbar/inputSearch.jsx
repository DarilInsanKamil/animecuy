'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";


const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        const val = searchRef.current.value;
        if (val !== "") {
            router.push(`/search/${val}`)
        }
    }
    return (
        <form className='relative' onSubmit={handleSearch}>
            <input placeholder="Cari anime" ref={searchRef} className='p-2 rounded-sm w-full' />
            <button className='absolute top-2.5 end-2'>
                <MagnifyingGlass size={20} />
            </button>
        </form>
    )
}
export default InputSearch;
import Link from "next/link"

const Header = ({ title, href, textLink }) => {
    return (
        <div className='flex justify-between items-center mb-4 text-color-primary'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            {
                href && textLink ?
                    <Link href={href} className='no-underline md:text-md text-sm hover:text-color-accent transition-all'>{textLink}</Link>
                    : null
            }
        </div>
    )
}
export default Header
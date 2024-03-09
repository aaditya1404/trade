import Link from "next/link";

const Header = () => {
    return (
        <header className=" z-50 fixed flex w-full justify-evenly h-[150px] items-center shadow  text-black backdrop-blur-md">
            <div>
                Logo
            </div>
            <ul className='flex gap-8 text-xs tracking-wide'>
                <Link href={'/'}>HOME</Link>
                <Link href={'/about'}>ABOUT US</Link>
                <Link href={'/services'}>SERVICES</Link>
                <Link href={'/pricing'}>PRICING</Link>
                <Link href={'/contact'}>CONTACT US</Link>
            </ul>
            <div>
                <button className="text-xs p-4 rounded-full border border-white-900 bg-[#2AD173] font-bold shadow-2xl hover:bg-[#FFFFFF] hover:text-[#2AD173] hover:border border-[#2AD173] transition duration-500 ease-in">CALL NOW</button>
            </div>
        </header>
    )
}
// bg-[#0A3041]
export default Header

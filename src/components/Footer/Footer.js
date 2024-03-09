import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex bg-[#0A3041] text-white w-full justify-evenly h-[500px] items-center">
            <div className="flex flex-col w-[20%] items-center">
                Logo
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem quo nulla iusto molestiae consequatur. Ratione soluta, dolor sunt officiis dignissimos reprehenderit laudantium deserunt facilis!</p>
            </div>
            <div className="w-[20%] flex flex-col">
                Usefull Links
                <ul className="flex flex-col">
                    <Link href={'/'}>HOME</Link>
                    <Link href={'/'}>ABOUT US</Link>
                    <Link href={'/'}>SERVICES</Link>
                    <Link href={'/'}>PRICING</Link>
                    <Link href={'/'}>GALLERY</Link>
                    <Link href={'/'}>DISCLAIMER</Link>
                    <Link href={'/'}>CONTACT US</Link>
                </ul>
            </div>
            <div className="w-[20%]">
                Newsletter
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut molestias, similique quia eaque praesentium amet in totam illum consectetur mollitia iusto facilis atque a.
                </p>
            </div>
            <div className="w-[10%]">
                Contact us
                <div>

                </div>
            </div>
        </footer>
    )
}

export default Footer

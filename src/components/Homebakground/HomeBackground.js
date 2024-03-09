import Image from "next/image"

const HomeBackground = () => {
    return (
        <div className="w-[133%] translate-x-[-170px]" >
            <div>
                <Image
                    src={'/image/homepage-bg.jpg'}
                    width={1360}
                    height={500}></Image>
            </div>
            {/* <div className="translate-y-[-100vh] translate-x-[12vw] text-white text-[4rem]">
                <p>
                    Algo trading
                </p>
            </div> */}
        </div>
    )
}

export default HomeBackground

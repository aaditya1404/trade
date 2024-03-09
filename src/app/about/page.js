import Image from "next/image"

const AboutPage = () => {
  return (
    <div >
      <div className="w-full h-[100vh] flex justify-evenly items-center gap-10"  >
        <Image src={'/image/professional.png'}
          height={500}
          width={500}
          className="px-8"></Image>
        <div className="p-4 flex justify-between flex-col">
          <h1 className="py-2 text-black text-xl font-semibold">Our success story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum, praesentium non, architecto ex quasi animi porro, explicabo dicta quis a asperiores nesciunt aliquid reprehenderit.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-semibold p-4">We Execute</h1>
        </div>
        <div className="p-4">
          <h1 className="text-xl py-2">Intraday Trading Strategies</h1>
          <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet vero temporibus assumenda doloremque accusantium amet vitae eaque quo id, quidem, praesentium dolore, asperiores odio qui. Unde omnis tenetur placeat eum doloremque. Voluptate cupiditate dicta veritatis ullam, hic impedit dolorum consectetur exercitationem, officiis sunt alias assumenda aliquam rem nobis odio voluptatibus. Asperiores cupiditate, esse, error hic quo atque dolorum nesciunt saepe in ipsam perspiciatis aspernatur porro. Maxime, impedit fugit quam veniam doloremque animi, alias iusto laborum repellat voluptas qui commodi eius corrupti maiores unde doloribus dolorum quibusdam numquam, soluta similique assumenda accusantium iure aut? Ad saepe harum labore minus laboriosam?</p>
        </div>
        <div className="p-4">
          <h1 className="text-xl py-2">Equity Intraday Strategies</h1>
          <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae ipsa commodi error quibusdam quasi temporibus obcaecati aspernatur libero. Debitis laboriosam quibusdam cumque itaque, laborum quos nihil corrupti eveniet quasi deserunt. Labore corrupti exercitationem ipsum explicabo error officia? Blanditiis nulla cumque, voluptatem reprehenderit magnam, illum harum tempora sit debitis tenetur nam rerum, neque excepturi velit non? Minima libero totam amet, officia quia sapiente blanditiis excepturi, laboriosam velit sit delectus obcaecati nobis praesentium reiciendis sed rem maxime cumque exercitationem nisi soluta consectetur quidem, ipsum architecto iste. Nisi debitis, in, placeat molestias quis quisquam facilis reiciendis molestiae accusantium minus illo, nobis repellendus!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

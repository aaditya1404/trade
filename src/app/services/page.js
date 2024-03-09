import Image from "next/image"

const ServicesPage = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center'>
      <div>
        <div>
          <p className="text-[2rem] mt-24">What we offer for you?</p>
        </div>
        <div className="flex mt-5 w-full justify-around items-center gap-6 ">
          <div className="border-2 border-slate-950 flex flex-col px-3 py-6 justify-center items-center">
            <div className="p-4">
              <Image
                src={"/image/APIBridge.png"}
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="p-2 text-[1.5rem]">API BRIDGE</div>
            <div>
              <p className="p-2 flex justify-center text-center">
                API Bridge is a set of programming interface, pincode and Places
                is first programming interface. APIBridge permits you to algo
                trade with various stages like MT4.
              </p>
            </div>
          </div>
          <div className="border-2 border-slate-950 flex flex-col px-3 py-6 justify-center items-center">
            <div className="p-4">
              <Image
                src={"/image/Algo.png"}
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="p-2 text-[1.5rem]">ALGO TRADING</div>
            <div>
              <p className="p-2 flex justify-center text-center">
                We will provide you the best platform for doing Auto Trading
                with your own Intra day and positional based strategies which
                will save your money and time Controlling your
              </p>
            </div>
          </div>
          <div className="border-2 border-slate-950 flex flex-col px-3 py-6 justify-center items-center">
            <div className="p-4">
              <Image
                src={"/image/AutoBuySell.png"}
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="p-2 text-[1.5rem]">AUTO BUY SELL SIGNAL</div>
            <div>
              <p className="p-2 flex justify-center text-center">
                You could know precisely when to purchase, hold or sell stocks
                or commodities. We are providing 100% exact programmed
                software.Our items have been given Complete Artificial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

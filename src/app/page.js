import Link from "next/link";
import Image from "next/image";
import HomeBackground from "@/components/Homebakground/HomeBackground";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <HomeBackground />
      {/* Trading Secrets */}
      <div>
        <div>
          <p className="text-[2rem] mt-8">
            Start Algotrading with Secret Strategies
          </p>
        </div>
        <div className="flex mt-5 justify-center gap-6">
          <div className="border-2 p-5 border-slate-950 rounded shadow">
            Intraday option trading Strategies
          </div>
          <div className="border-2 p-5 border-slate-950 rounded shadow">
            Equity Intraday Strategies
          </div>
          <div className="border-2 p-5 border-slate-950 rounded shadow">
            MT4 Trading Strategies
          </div>
          <div className="border-2 p-5 border-slate-950 rounded shadow">
            Fourex Trading Strategies
          </div>
        </div>
      </div>
      {/* What we offer for you? */}
      <div>
        <div>
          <p className="text-[2rem] mt-8">What we offer for you?</p>
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

      {/* Why you should work with us */}
      <div>
        <div>
          <p className="text-[2rem] mt-8">
            WHY YOU SHOULD WORK WITH US!
          </p>
        </div>

        <div className="flex mt-4 gap-6">
          <div className="flex flex-col px-3 py-6 justify-center items-center">
            <div className="p-4">
              <Image src={'/image/professional.png'}
                width={200}
                height={200}></Image>
            </div>
            <div>
              <p className="p-2 text-[1.5rem]">
                Professional Approach
              </p>
            </div>
            <div>
              <p className="p-2 flex justify-center text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, suscipit deleniti voluptatibus voluptatum ipsa eveniet dolorum, autem eligendi doloribus, possimus iusto soluta! Provident saepe placeat expedita iusto quaerat dolores eaque, esse aliquid atque optio harum. Magnam iusto at exercitationem consectetur?
              </p>
            </div>
          </div>

          <div className="flex flex-col px-3 py-6 justify-center items-center">
            <div className="p-4">
              <Image src={'/image/professional.png'}
                width={200}
                height={200}></Image>
            </div>
            <div>
              <p className="p-2 text-[1.5rem]">
                Efficient Programming
              </p>
            </div>
            <div>
              <p className="p-2 flex justify-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio repellendus consequatur magni dolor pariatur. Libero mollitia, dolorum aut reprehenderit blanditiis molestias perspiciatis hic sapiente rerum, cumque provident neque quod nisi dolor. Dicta saepe totam quo in dignissimos quas ullam ipsam.
              </p>
            </div>
          </div>

          <div className="flex flex-col px-3 py-6 justify-center items-center">
            <div className="p-4">
              <Image src={'/image/professional.png'}
                width={200}
                height={200}></Image>
            </div>
            <div>
              <p className="p-2 text-[1.5rem]">
                Unlimited Resources
              </p>
            </div>
            <div>
              <p className="p-2 flex justify-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio repellendus consequatur magni dolor pariatur. Libero mollitia, dolorum aut reprehenderit blanditiis molestias perspiciatis hic sapiente rerum, cumque provident neque quod nisi dolor. Dicta saepe totam quo in dignissimos quas ullam ipsam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <div className="mt-8">
          <h1 className="text-4xl">Testimonials</h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl">What people say about us?</p>
        </div>
        <div >
          Reveiw
        </div>
      </div>

      {/* Supported Brokers */}
      <div className="mt-8">
        <h1 className="text-4xl">Supported Brokers</h1>
        <div>
          <div className="flex overflow-hidden">
            <img src="/image/5paisa.png" alt="" className="h-[250px]" />
            <img src="/image/alice.png" alt="" className="h-[250px]" />
            <img src="/image/angel.png" alt="" className="h-[250px]" />
            <img src="/image/fyers.png" alt="" className="h-[250px]" />
            <img src="/image/iifl.png" alt="" className="h-[250px]" />
            <img src="/image/master.png" alt="" className="h-[250px]" />
            <img src="/image/Zerodha.png" alt="" className="h-[250px]" />
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div>
        FAQs
      </div>

    </div >
  );
}

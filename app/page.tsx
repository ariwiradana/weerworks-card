import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import {
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiSoundcloudLogoFill,
  PiTiktokLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";

const Home: NextPage = () => {
  return (
    <main className="max-w-sm mx-auto">
      <div className="relative w-full h-[54dvh] bg-dark/5">
        <Image
          src="/images/weerworks.jpg"
          alt="Profile Image"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="bg-gradient-to-b from-white/0 to-20% to-white backdrop-blur-xs w-full py-[42px] px-8 min-h-80 -mt-36 relative z-10">
        <div className="flex items-center gap-x-2 mb-1">
          <h1 className="text-2xl font-medium text-dark">Ari Wiradana</h1>
          <Image
            src="/images/check.png"
            alt="Check Icon"
            width={28}
            height={28}
            sizes="28px"
          />
        </div>
        <p className="text-base text-dark/60 leading-6">
          I build websites and craft music — from technology to creativity.
        </p>
        <div className="flex items-center gap-x-4 text-dark text-xl mt-5">
          <Link href="https://www.linkedin.com/in/ariwiradana" target="_blank">
            <PiLinkedinLogoFill />
          </Link>
          <Link href="https://instagram.com/ariwiradana" target="_blank">
            <PiInstagramLogoFill />
          </Link>
          <Link href="https://tiktok.com/@itsweer" target="_blank">
            <PiTiktokLogoFill />
          </Link>
          <Link href="https://soundcloud.com/itsweer" target="_blank">
            <PiSoundcloudLogoFill />
          </Link>
          <Link href="https://youtube.com/@weerworks" target="_blank">
            <PiYoutubeLogoFill />
          </Link>
        </div>
        <p className="text-dark mb-1.5 mt-8">Hire me on</p>
        <div className="flex flex-col border border-dark/10 divide-y divide-dark/10">
          {/* <Link
            href="https://www.fiverr.com/s/YRNlmWp"
            target="_blank"
            className="flex justify-center px-4 h-12 text-white items-center"
          >
            <Image
              src="/images/fiverr.png"
              alt="Logo Fiverr"
              width={60}
              height={60}
              sizes="60px"
            />
          </Link> */}
          <Link
            href="https://fastwork.id/user/ariwiradana"
            target="_blank"
            className="flex justify-center px-4 h-12 text-white items-center"
          >
            <Image
              src="/images/fastwork.png"
              alt="Logo Fastwork"
              width={120}
              height={120}
              sizes="120px"
            />
          </Link>
        </div>
        <p className="text-dark mb-1.5 mt-8">Things i run</p>
        <div className="flex flex-col divide-y divide-white">
          <Link
            href="https://notsokoplo.com"
            target="_blank"
            className="flex justify-between pl-4 pr-2 py-3 bg-dark/5 hover:bg-dark/7 text-dark items-center"
          >
            <p>notsokoplo.com</p>
            <HiChevronRight />
          </Link>
          <Link
            href="https://momentinvitation.com"
            target="_blank"
            className="flex justify-between pl-4 pr-2 py-3 bg-dark/5 hover:bg-dark/7 text-dark items-center"
          >
            <p>momentinvitation.com</p>
            <HiChevronRight />
          </Link>
          <Link
            href="https://wanajiwa.com"
            target="_blank"
            className="flex justify-between pl-4 pr-2 py-3 bg-dark/5 hover:bg-dark/7 text-dark items-center"
          >
            <p>wanajiwa.com</p>
            <HiChevronRight />
          </Link>
        </div>
        <div className="mt-8">
          <Link target="_blank" href="https://wa.me/6281246768627">
            <button className="w-full p-4 rounded-full bg-dark text-white font-medium">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

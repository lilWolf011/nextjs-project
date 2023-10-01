"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Vivus from "vivus";

const styles = {
  position: "absolute",
  width: "40px",
  height: "40px",
  border: "1.5px solid white",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  transition: "transform 0.1s",
  overflow: "hidden",
};

export default function Home() {
  const followerRef = useRef(null);

  //Mouse Follower
  useEffect(() => {

    // Mouse konumunu takip etmek için değişkenler
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Mouse hareketini takip etmek için olay dinleyici ekleyin
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Takip edilecek elementi pürüzsüz bir şekilde taşımak için animasyon çerçevesi kullanın
    function updateFollowerPosition() {
      const dx = (mouseX - followerX) / 10; // X ekseni için hareket
      const dy = (mouseY - followerY) / 10; // Y ekseni için hareket

      followerX += dx + -64;
      followerY += dy + -6;

      // Takip edilecek elementin konumunu güncelleyin
      followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px)`;

      // Bir sonraki çerçeveyi isteyin
      requestAnimationFrame(updateFollowerPosition);
    }
    // Animasyonu başlatın
    updateFollowerPosition();
  }
  , []);

  //Animation
  useEffect(() => {
    const vivusInstance = new Vivus(
      "my-svg", // SVG elementinin ID'si
      {
        start: "manual", // Animasyonu manuel olarak başlat
        type: "delayed", // veya "async" kullanabilirsiniz
        duration: 200, // Animasyon süresi
      },
      () => {
        // Animasyon tamamlandığında yapılacak işlemleri burada tanımlayabilirsiniz.
        console.log("Animasyon tamamlandı");
      }
    );

    setTimeout(() => {
      vivusInstance.play(); // Animasyonu başlat
    }, 5000); // Örneğin, 10 saniye (10000 milisaniye) sonra başlatın
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10 ">
      <div
        style={styles}
        className="follower overflow-hidden"
        id="follower"
        ref={followerRef}
      ></div>
      <div className="z-10 max-w-8xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul className="fixed pointer space-x-8 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-thin">
          <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
            <a href="/About">About</a>
          </li>
          <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
            <a href="/Skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
            <a href="/Projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            By{" lilWolf "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="my-svga"
              className="absolute"
              width="100"
              height="100"
              viewBox="0 0 609 372"
              fill="none"
            >
              <path
                d="M76.5742 182.645C70.0742 177.645 61.7097 172.555 54.702 168.926C37.4068 159.97 18.6511 145.944 10.3977 127.787C-10.4077 82.015 14.5832 24.443 61.4491 7.11444C73.6814 2.59159 87.6677 2.81014 100.499 3.17363C113.971 3.55527 126.039 5.91555 137.638 12.9659C164.218 29.1221 176.679 56.0414 177.106 86.7666C177.422 109.499 175.271 134.187 167.493 155.671C161.686 171.709 154.036 187.003 146.415 202.244C134.591 225.892 113.59 257.307 121.875 285.24C130.315 313.696 153.97 326.439 182.42 326.439C192.772 326.439 202.575 325.145 211.575 320.145C223.167 313.705 231.914 298.707 236.815 286.136C242.025 272.771 241.489 256.325 240.039 242.309C238.584 228.243 230.978 216.033 227.262 202.543C217.77 168.091 212.745 135.673 230.426 102.291C256.363 53.3226 312.214 27.6936 366.742 39.7157C421.091 51.6981 447.919 112.613 433.676 163.672C429.243 179.566 419.075 194.64 408.001 206.663C390.49 225.675 371.901 244.178 356.771 265.178C348.485 276.679 340.085 287.12 332.575 299.145C327.813 306.77 322.654 316.354 320.945 325.365C318.611 337.675 317.075 350.645 333.783 361.668C349.36 369.31 370.331 369.887 387.163 368.773C415.257 366.914 440.546 358.51 466.397 347.935C491.723 337.574 514.398 321.289 535.779 304.347C557.605 287.054 577.581 266.73 590.951 242.011C604.932 216.159 606.3 188.167 606.117 159.492C605.969 136.408 600.789 116.993 593.22 95.3647"
                stroke="#8F00FF"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-7xl font-normal font-semibold font-montserrat">
          PORTFOLİO
        </p>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              id="my-svg"
              className="absolute"
              width="400"
              height="400"
              viewBox="0 0 609 372"
              fill="none"
            >
              <path
                d="M76.5742 182.645C70.0742 177.645 61.7097 172.555 54.702 168.926C37.4068 159.97 18.6511 145.944 10.3977 127.787C-10.4077 82.015 14.5832 24.443 61.4491 7.11444C73.6814 2.59159 87.6677 2.81014 100.499 3.17363C113.971 3.55527 126.039 5.91555 137.638 12.9659C164.218 29.1221 176.679 56.0414 177.106 86.7666C177.422 109.499 175.271 134.187 167.493 155.671C161.686 171.709 154.036 187.003 146.415 202.244C134.591 225.892 113.59 257.307 121.875 285.24C130.315 313.696 153.97 326.439 182.42 326.439C192.772 326.439 202.575 325.145 211.575 320.145C223.167 313.705 231.914 298.707 236.815 286.136C242.025 272.771 241.489 256.325 240.039 242.309C238.584 228.243 230.978 216.033 227.262 202.543C217.77 168.091 212.745 135.673 230.426 102.291C256.363 53.3226 312.214 27.6936 366.742 39.7157C421.091 51.6981 447.919 112.613 433.676 163.672C429.243 179.566 419.075 194.64 408.001 206.663C390.49 225.675 371.901 244.178 356.771 265.178C348.485 276.679 340.085 287.12 332.575 299.145C327.813 306.77 322.654 316.354 320.945 325.365C318.611 337.675 317.075 350.645 333.783 361.668C349.36 369.31 370.331 369.887 387.163 368.773C415.257 366.914 440.546 358.51 466.397 347.935C491.723 337.574 514.398 321.289 535.779 304.347C557.605 287.054 577.581 266.73 590.951 242.011C604.932 216.159 606.3 188.167 606.117 159.492C605.969 136.408 600.789 116.993 593.22 95.3647"
                stroke="#8F00FF"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
      </div>
      <div className="flex gap-2 cursor-pointer items-center ">
        <button>
          <Image
            src="/discord.svg"
            alt="Discord Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
        </button>
        <button>
          <Image
            src="/instagram (1).svg"
            alt="İnstagram Logo"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
        </button>
        <button>
          <Image
            src="/x-twitter.svg"
            alt="X Logo"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
        </button>
        <button>
          <Image
            src="/spotify.svg"
            alt="Spotify Logo"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
        </button>
      </div>
    </main>
  );
}

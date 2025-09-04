import { useEffect } from "react";
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}
const PIXEL_ID = "1638502973785350";
const TELEGRAM_LINKS: Record<string, string> = {
  "покраска-доллар": "https://t.me/+npFlOS8a1N4yMTdi",
  "покраска-доллар-1": "https://t.me/+BwUS5hyeAQ43MjQy",
  "юсдт-кеш": "https://t.me/+AiYoGSQ9SgoyMzhi",
};

// Main App component
const MainPage = () => {
  useEffect(() => {
    // Inject FB Pixel script
    if (!window.fbq) {
      console.log("FB Pixel not found, injecting script...");

      const fbScript = document.createElement("script");
      fbScript.async = true;
      fbScript.src = "https://connect.facebook.net/en_US/fbevents.js";
      fbScript.onload = () => {
        console.log("FB Pixel script loaded.");
        // Initialize fbq after script has loaded
        if (window.fbq) {
          window.fbq("init", PIXEL_ID);
          window.fbq("track", "PageView");
          console.log("FB Pixel initialized and page view tracked.");
        }
      };
      document.head.appendChild(fbScript);

      // Temporary fbq function in case someone calls it before script loads
      window.fbq = function (...args: any[]) {
        (window.fbq as any).queue = (window.fbq as any).queue || [];
        (window.fbq as any).queue.push(args);
        console.log("FB Pixel called before script loaded:", args);
      };
      (window.fbq as any).loaded = true;
      (window.fbq as any).version = "2.0";
    } else {
      console.log("FB Pixel already initialized.");
    }
  }, []);

  return (
    <div className="flex items-center h-screen justify-center w-screen  flex-col ">
      <div
        className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.webp')" }}
      ></div>
      <title>Main</title>
      {/* Right Image */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.webp')" }}
      ></div>

      {/* Main Container */}
      <div className="w-full z-99  max-w-sm mx-auto font-main py-0 lg:py-7 px-2 bg-red-800 rounded-2xl overflow-hidden shadow-2xl md:min-w-[27rem] pb-4 md:h-min-[10px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center py-2 md:py-4 text-white text-center ">
          {/* Placeholder for Logo */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <img src="coin.webp" />
          </div>
          <h1 className="md:!text-[20px] font-bold mb-1 !text-[15px]">
            ПЕРЕХІД У ТЕЛЕГРАМ
          </h1>
          <p className="text-sm  opacity-75 font-medium">
            MONEX — Швидко, Анонімно, Надійно
          </p>
        </div>

        {/* Content Cards Section */}
        <div className="px-4 py-0 space-y-4 sm:py-4">
          {/* Card 1 */}
          <div className=" text-white rounded-md p-2 flex items-center space-x-4 border border-white">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2668 4.375H23.9335V13.125H12.2668V4.375Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="bevel"
              />
              <path
                d="M12.2668 21.875H23.9335V30.625H12.2668V21.875Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="bevel"
              />
              <path
                d="M9.35002 13.125L6.43335 17.5L9.35002 21.875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
              <path
                d="M26.8501 13.125L29.7668 17.5L26.8501 21.875"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>

            <div className="flex-1">
              <p className="text-sm font-semibold">Кеш ⇄ USDT</p>
              <p className="text-[12px] opacity-75">
                Швидкий обмін у дві сторони.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" text-white rounded-md p-2 flex items-center space-x-4 border border-white">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3085 5.83333H7.89185C5.4756 5.83333 3.51685 7.79209 3.51685 10.2083V21.875C3.51685 24.2912 5.4756 26.25 7.89185 26.25H28.3085C30.7248 26.25 32.6835 24.2912 32.6835 21.875V10.2083C32.6835 7.79209 30.7248 5.83333 28.3085 5.83333Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M3.51685 14.5833H32.6835"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M22.4751 20.4167H26.8501"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>

            <div className="flex-1">
              <p className="text-sm font-semibold">
                Готівка/Безготівка • Україна ⇄ світ
              </p>
              <p className="text-[12px] opacity-75">
                Перестановки в межах країни і світу.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" text-white rounded-md p-2 flex items-center space-x-4 border border-white">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0167 4.375L31.225 14.5833L21.0167 24.7917L10.8083 14.5833L21.0167 4.375Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M4.9751 30.625L15.1834 20.4167"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <div className="flex-1">
              <p className="text-sm font-semibold">
                «Окраска» білого $У «синій»
              </p>
              <p className="text-[12px] opacity-75">
                Перестановки в межах країни і світу.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className=" text-white rounded-md p-2 flex items-center space-x-4 border ">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2668 11.6667C12.2668 10.1196 12.8814 8.63583 13.9754 7.54187C15.0694 6.44791 16.5531 5.83333 18.1002 5.83333C19.6473 5.83333 21.131 6.44791 22.225 7.54187C23.3189 8.63583 23.9335 10.1196 23.9335 11.6667C23.9335 13.2138 23.3189 14.6975 22.225 15.7915C21.131 16.8854 19.6473 17.5 18.1002 17.5C16.5531 17.5 15.0694 16.8854 13.9754 15.7915C12.8814 14.6975 12.2668 13.2138 12.2668 11.6667Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.51685 29.1667L12.2668 20.4167"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M32.6833 29.1667L23.9333 20.4167"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <div className="flex-1">
              <p className="text-sm font-semibold">P2P послуги</p>
              <p className="text-[12px] opacity-75">
                Безпечно, конфіденційно, під гарантії.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

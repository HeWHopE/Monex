// Main App component
const App = () => {
  // We'll use this state variable later if we need to add interactivity

  return (
    <div className="flex items-center justify-center w-screen p-4 flex-col ">
      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto font-main py-7 px-2 bg-red-800 rounded-2xl overflow-hidden shadow-2xl md:min-w-[27rem] pb-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center py-4 text-white text-center">
          {/* Placeholder for Logo */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <img src="coin.png" />
          </div>
          <h1 className="!text-[20px] font-bold mb-1">ПЕРЕХІД У ТЕЛЕГРАМ</h1>
          <p className="text-sm text-black font-medium">
            MONEX — Швидко, Анонімно, Надійно
          </p>
        </div>

        {/* Content Cards Section */}
        <div className="p-4 space-y-4">
          {/* Card 1 */}
          <div className=" text-white rounded-md p-2 flex items-center space-x-4 border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15 15c0-1.1-.9-2-2-2h-2c-.55 0-1-.45-1-1V9c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55-.45 1-1 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1 .45 1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55.45-1 1-1h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V15zM21 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9zM15 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9zM9 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9zM3 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9z" />
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
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 17H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM21 11H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM21 5H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" />
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
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z" />
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
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z" />
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
      {/* Button Section */}
      <div className="p-4">
        <button className="w-full md:min-w-[27rem] text-white py-4 rounded-xl text-sm font-bold shadow-lg hover:bg-cyan-600 transition-colors  !bg-cyan-600">
          ПЕРЕЙТИ У ТЕЛЕГРАМ
        </button>
        <p className="text-center text-sm text-black mt-2">
          Натисніть, щоб відкрити застосунок або веб-версію.
        </p>
      </div>
    </div>
  );
};

export default App;

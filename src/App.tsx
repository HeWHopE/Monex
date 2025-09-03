import { useState } from "react";

// Main App component
const App = () => {
  // We'll use this state variable later if we need to add interactivity
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center w-screen p-4">
      {/* Main Container */}
      <div className="w-full max-w-sm mx-auto bg-red-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center pt-8 pb-6 text-white text-center">
          {/* Placeholder for Logo */}
          <div className="bg-gray-400 w-20 h-20 rounded-full flex items-center justify-center border-2 border-white mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V8.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5-.22-.5-.5V7h-1v1.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7h-1v1.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v2.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5V7h-1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-1">ПЕРЕХІД У ТЕЛЕГРАМ</h1>
          <p className="text-sm font-medium">
            MONEX — Швидко, Анонімно, Надійно
          </p>
        </div>

        {/* Content Cards Section */}
        <div className="p-4 space-y-4">
          {/* Card 1 */}
          <div className="bg-red-700/50 text-white rounded-lg p-4 flex items-center space-x-4 border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15 15c0-1.1-.9-2-2-2h-2c-.55 0-1-.45-1-1V9c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55-.45 1-1 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1 .45 1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55.45-1 1-1h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V15zM21 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9zM15 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9zM9 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9zM3 9c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2c1.1 0 2-.9 2-2V9z" />
            </svg>
            <div className="flex-1">
              <p className="text-lg font-semibold">Кеш ⇄ USDT</p>
              <p className="text-sm opacity-75">Швидкий обмін у дві сторони.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-red-700/50 text-white rounded-lg p-4 flex items-center space-x-4 border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 17H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM21 11H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM21 5H3c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" />
            </svg>
            <div className="flex-1">
              <p className="text-lg font-semibold">
                Готівка/Безготівка • Україна ⇄ світ
              </p>
              <p className="text-sm opacity-75">
                Перестановки в межах країни і світу.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-red-700/50 text-white rounded-lg p-4 flex items-center space-x-4 border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z" />
            </svg>
            <div className="flex-1">
              <p className="text-lg font-semibold">
                «Окраска» білого $У «синій»
              </p>
              <p className="text-sm opacity-75">
                Перестановки в межах країни і світу.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-red-700/50 text-white rounded-lg p-4 flex items-center space-x-4 border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z" />
            </svg>
            <div className="flex-1">
              <p className="text-lg font-semibold">P2P послуги</p>
              <p className="text-sm opacity-75">
                Безпечно, конфіденційно, під гарантії.
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="p-4">
          <button className="w-full  text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-cyan-600 transition-colors  !bg-cyan-600">
            ПЕРЕЙТИ У ТЕЛЕГРАМ
          </button>
          <p className="text-center text-sm text-gray-400 mt-2">
            Натисніть, щоб відкрити застосунок або веб-версію.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

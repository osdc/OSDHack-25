import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [audio] = useState(new Audio("/osdc.mp3"));
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [secondMousePos, setSecondMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Autoplay Background Music
    audio.play().catch(() => console.log("Autoplay failed"));

    // Mouse Move Listener (First Cat & Second Cat)
    const updateMousePosition = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Delay effect for second cat
      setTimeout(() => {
        setSecondMousePos({ x: e.clientX - 30, y: e.clientY - 30 });
      }, 100);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [audio]);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/bg-arcade.jpg')" }}
    >
      {/* Pixelated Cat Follower - Closer to Cursor */}
      <motion.img
        src="/pixel-cat.gif"
        alt="Pixel Cat"
        className="fixed w-16 h-16 pointer-events-none"
        style={{
          left: mousePos.x + 10,
          top: mousePos.y + 10,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: mousePos.x + 10, y: mousePos.y + 10 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, mass: 0.4 }}
      />

      {/* Second Cat - Slightly Behind */}
      <motion.img
        src="/kitty-chase-pixel.webp"
        alt="Pixel Cat 2"
        className="fixed w-16 h-16 pointer-events-none"
        style={{
          left: secondMousePos.x,
          top: secondMousePos.y,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: secondMousePos.x, y: secondMousePos.y }}
        transition={{ type: "spring", stiffness: 100, damping: 12, mass: 0.5 }}
      />

      {/* Logo at the top-left */}
      {/* <img
        src="https://avatars.githubusercontent.com/u/919383?s=200&v=4"
        alt="OSDCHack Logo"
        className="absolute top-4 left-4 w-16 h-16"
      /> */}

      {/* Main Content */}
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-ps2p font-bold tracking-widest uppercase pixel-font">
          OSDCHACK 2025
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          The Ultimate Open Source Hackathon at JIIT
        </p>

        {/* Centered General Information Section */}
        <div className="flex justify-center w-full mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl w-full bg-black/70 text-white p-6 md:p-10 rounded-md border-4 border-dotted border-gray-400 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-ps2p mb-8 tracking-wide uppercase">
              General Information
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-play">
              Super-ultra-mega flagship hackathon with a chance to change the trajectory of people’s lives.
            </p>

            <div className="border-t-4 border-dotted border-gray-500 my-6"></div>

            {/* Theme Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 p-5 bg-gray-800 rounded-md border-2 border-dotted border-gray-500"
            >
              <h2 className="text-3xl md:text-4xl font-pixelify text-yellow-300">
                Theme: Blast from the Past
              </h2>
              <p className="text-gray-300 text-lg mt-2">
                Take old-school stuff—retro games, vintage gadgets, dead platforms—and bring them back with a modern twist.
              </p>
            </motion.div>

            {/* Mini Themes */}
            <div className="mt-8 grid gap-y-6">
              <div>
                <h3 className="text-2xl font-ps2p text-green-300">Pixel Artify</h3>
                <p className="text-gray-300 font-play ml-4">Enhance **8-bit** and **retro aesthetics**.</p>
              </div>

              <div>
                <h3 className="text-2xl font-ps2p text-blue-300">Rebuild a Lost Tool</h3>
                <p className="text-gray-300 font-play ml-4">Remake platforms like **Google Reader, Vine, or Winamp**.</p>
              </div>

              <div>
                <h3 className="text-2xl font-ps2p text-pink-300">Game-Focused Social Network</h3>
                <p className="text-gray-300 font-play ml-4">
                  A **modern Club Penguin or Nintendo Miiverse**, where users share game-related thoughts and art.
                </p>
              </div>
            </div>

            <div className="border-t-4 border-dotted border-gray-500 my-6"></div>

            {/* Dates and Venue */}
            <h2 className="text-2xl md:text-3xl font-pixelify text-yellow-400">Dates</h2>
            <p className="text-gray-300 font-play">26th - 27th April (48 hours), after **T2** and **lab tests**.</p>

            <h2 className="text-2xl md:text-3xl font-pixelify text-blue-400 mt-6">Venue</h2>
            <p className="text-gray-300 font-play">All four **Computer Labs (CLs)** beneath ABB-3.</p>

            <h2 className="text-2xl md:text-3xl font-pixelify text-red-400 mt-6">Team Size</h2>
            <p className="text-gray-300 font-play">Teams must have **4-6 people**. Participants will form their own teams.</p>

            <div className="border-t-4 border-dotted border-gray-500 my-6"></div>

            {/* Mini Events */}
            <h2 className="text-2xl md:text-3xl font-pixelify text-purple-400">Mini Events</h2>
            <ul className="text-gray-300 font-play mt-4">
              <li>🔥 Monkey Typing - Fastest typist wins!</li>
              <li>♟️ Game Theory - Play a strategy game in real-time!</li>
            </ul>

            {/* Prize Distribution */}
            <h2 className="text-2xl md:text-3xl font-pixelify text-green-300 mt-6">Prize Distribution</h2>
            <ul className="list-none mt-4 text-gray-300 font-play">
              <li>🥇 First Place - ₹20,000</li>
              <li>🥈 Second Place - ₹15,000</li>
              <li>🥉 Third Place - ₹10,000</li>
              <li>👩‍💻 All-Girls Track - ₹2,500</li>
              <li>🍼 First Years Only Track - ₹2,500</li>
            </ul>
          </motion.div>
        </div>

        {/* Play Button */}
        <motion.button
          onClick={() => audio.play()}
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 py-3 bg-white text-black font-bold uppercase rounded pixel-border"
        >
           🥚🥚🥚🥚🥚🥚
        </motion.button>
      </div>
    </div>
  );
}

import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import phone from "../../public/phoneshot.png";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col overflow-hidden gap-4 h-screen px-4 md:px-40">
      <div className="w-full flex flex-row justify-between py-8 items-center z-50">
        <h1 className="md:text-3xl text-4xl font-bold tracking-tighter">
          SYNC
        </h1>
        <Link
          href="mailto:sync@synchq.io"
          className="flex flex-row gap-2 bg-white hover:opacity-60 transition-all shadow text-sm items-center md:px-4 py-2 px-3 border rounded-full border-gray-400"
        >
          <IoMailOutline className="md:text-lg" />
          <p className="tracking-tight text-gray-800 md:text-base text-sm">
            Get in touch
          </p>
        </Link>
      </div>
      <div className="flex flex-row w-full flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          className="flex-grow flex justify-center flex-col overflow-hidden gap-2"
        >
          <h1 className="font-bold pb-2 tracking-tight text-4xl md:text-6xl bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent">
            Create <span className="text-blue-500">Events</span> in Real Time
          </h1>
          <div className="flex flex-col gap-2 md:text-base text-sm  md:gap-4 md:w-4/5">
            <p className="tracking-tight text-gray-500">
              Come & join us at Sync, for a more enhanced social experience.
            </p>
            <p className="tracking-tight text-gray-500">
              At Sync we understand the need for a platform where hosters are
              able to create and post events in real time, & for socialites to
              explore events in real time, thereby social syncing.
            </p>
            <p className="tracking-tight text-gray-500">
              The events management world is ever evolving. Our mission? To keep
              you ahead of the game with the freshest trends, tips, and insider
              secrets for planning exceptional events.
            </p>
            <p className="tracking-tight text-gray-500">
              Join our newsletter today and get ready to dive into the community
              of creating events in real time. Let’s craft unforgettable events
              & create memories that last a lifetime. Stay tuned and be part of
              future world of events management!
            </p>
          </div>
          <form className="flex flex-row gap-2 md:w-3/5 py-3 md:mt-6">
            <input
              placeholder="Enter your email"
              className="flex-grow border bg-white rounded px-4 text-sm"
            />
            <motion.button
              whileHover={{
                y: -2,
                transition: { duration: 0.1, ease: "easeOut", bounce: 0.4 },
              }}
              className="w-max cursor-pointer bg-blue-500 rounded py-2 flex flex-row text-white items-center gap-2 px-4 text-sm"
            >
              Submit <FaArrowRightLong />
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeInOut" }}
          className="relative lg:flex justify-center items-center hidden"
        >
          {/* Image container */}
          <img
            src={phone.src}
            className="w-[80%] rounded-xl border border-gray-400"
          />

          {/* Elements to be placed on top of the image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeInOut" }}
            className="absolute top-0 -left-40 w-full h-full flex justify-center items-center"
          >
            <div className="text-white rounded-lg px-4 py-2 shadow-xl bg-white text-center">
              <p className="text-base tracking-tighter text-gray-700">
                Pool Party @ Clapham Common{" "}
                <span className="text-xl pl-1">💦</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.7, ease: "easeInOut" }}
            className="absolute -top-40 left-40 w-full h-full flex justify-center items-center"
          >
            <div className="text-white rounded-lg p-4 shadow-xl bg-white text-center">
              <p className="text-4xl">🎉</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.7, ease: "easeInOut" }}
            className="absolute top-60 left-40 w-full h-full flex justify-center items-center"
          >
            <div className="text-white rounded-lg px-4 py-2 shadow-xl bg-white text-center">
              <p className="text-base tracking-tighter text-gray-700">
                BBQ @ Harrow Youth Club 🍗
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full flex flex-row justify-between py-8 items-center">
        <div className="flex flex-row gap-2 items-center">
          <motion.div
            whileHover={{
              y: -2,
              transition: { duration: 0.1, ease: "easeOut", bounce: 0.4 },
            }}
            className="bg-black p-2 rounded-full cursor-pointer"
          >
            <FaTwitter className="text-white" />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              transition: { duration: 0.1, ease: "easeOut", bounce: 0.4 },
            }}
            className="bg-black p-2 rounded-full cursor-pointer"
          >
            <FaInstagram className="text-white" />
          </motion.div>
          <motion.div
            whileHover={{
              y: -2,
              transition: { duration: 0.1, ease: "easeOut", bounce: 0.4 },
            }}
            className="bg-black p-2 rounded-full cursor-pointer"
          >
            <FaTiktok className="text-white" />
          </motion.div>
        </div>
        <p className="text-xs tracking-tight text-gray-500">
          Copyright © 2024 SYNC. All rights reserved.
        </p>
      </div>
    </main>
  );
}

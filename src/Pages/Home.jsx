import { format } from "date-fns";
import React from "react";
import HomeCard from "./HomeCard";
import MarqueeComponent from "react-fast-marquee";
import TopSixCard from "./TopSixCard";
import logo from "../assets/pnj.jpg";
import useApps from "../Hooks/useApps";

// const dataPromise = fetch("/gamingData.json").then((res) => res.json());

const Home = () => {
  // const games = use(dataPromise);
  const Marquee = MarqueeComponent.default || MarqueeComponent;

  const { apps, loading, error } = useApps();

  const { ratings } = apps;

  const threeGames = [...apps].slice(0, 3);

  const topThreeGames = [...apps]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
      <section className="text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-200 pt-3">
          This is my special gaming website
        </h2>
        <p className="text-gray-300 text-sm md:text-lg font-bold mt-3">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </p>
        <div className="w-11/12 mx-auto md:w-4/12 h-40 bg-[#072a41] mt-3 rounded-2xl">
          <Marquee>
            <div className="flex gap-20">
              {threeGames.map((game) => (
                <HomeCard key={game.id} game={game}></HomeCard>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* // section 2 */}
      <section className="w-11/12 mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 space-y-3">
          {topThreeGames.map((app) => (
            <TopSixCard key={app.id} app={app}></TopSixCard>
          ))}
        </div>
      </section>

      {/* <section>3.......</section> */}

      <section className="w-11/12 mx-auto md:w-6/12 h-55 md:h-90 bg-gray-300 flex rounded-3xl gap-2 md:gap-5 mt-2">
        <div className="">
          <img
            src={logo}
            alt=""
            className="w-40 h-40 md:w-70 md:h-70 rounded-full ml-3 md:ml-20 mt-3"
          />
          <h2 className="text-sm md:text-lg font-bold ml-10 md:ml-40 mt-1 md:mt-3">
            Made By @!
          </h2>
        </div>
        <div className="w-50 h-50 md:w-80 md:h-70 md:mt-10 ml-5 md:ml-20 spacey-y-1 md:space-y-4">
          <h2 className="text-xl md:text-4xl font-bold mt-3 md:mt-0">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-xs md:text-lg text-black/60 font-bold mt-1 md:mt-3">
            Verified your gmail and subscribe to our newsletter
          </p>

          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="input input-bordered w-50 md:w-full focus:outline-none focus:ring-4 focus:ring-blue-400 mt-1 md:mt-3"
          />
          <button className="btn w-50 md:w-full bg-blue-500 text-white mt-1 md:mt-3">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { format } from "date-fns";
import React, { use } from "react";
import HomeCard from "./HomeCard";
import MarqueeComponent from "react-fast-marquee";
import TopSixCard from "./TopSixCard";
import logo from "../assets/pnj.jpg";

const dataPromise = fetch("/gamingData.json").then((res) => res.json());

const Home = () => {
  const games = use(dataPromise);
  const Marquee = MarqueeComponent.default || MarqueeComponent;

  const { ratings } = games;

  const threeGames = [...games].slice(0, 3);

  const topThreeGames = [...games]
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
        <div className="w-11/12 mx-auto md:w-4/12 h-40 bg-[#072a41] mt-3">
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
      {/* <div className="w-60 h-80 bg-[#360909] rounded-2xl ml-20">
          <img
            src={logo}
            alt=""
            className="ml-5 mt-5 w-50 h-50  rounded-full "
          />
          <h2 className="text-sm font-bold text-white ml-17 mt-2">
            Made BY @!
          </h2>
        </div>
        <div className="w-120 h-80 bg-[#2c0606] rounded-2xl">
          <h2 className="text-white text-center pt-3">Apps details</h2>
          <div>
            <h2 className="text-white">{games.title}</h2>
          </div>
        </div> */}
      <section className="w-6/12 mx-auto h-90 bg-gray-300 flex rounded-3xl gap-5 mt-3">
        <div>
          <img
            src={logo}
            alt=""
            className="w-70 h-70 rounded-full ml-20 mt-3"
          />
          <h2 className="text-lg font-bold ml-40 mt-3">Made By @!</h2>
        </div>
        <div className="w-80 h-70 mt-10 ml-20 spacey-y-4">
          <h2 className="text-4xl font-bold mt-3">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-lg text-black/60 font-bold mt-3">
            Verified your gmail and subscribe to our newsletter
          </p>

          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="input input-bordered w-ful focus:outline-none focus:ring-4 focus:ring-blue-400 mt-3"
          />
          <button className="btn w-full bg-blue-500 text-white mt-3">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

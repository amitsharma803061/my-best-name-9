import { format } from "date-fns";
import React, { use } from "react";
import HomeCard from "./HomeCard";
import MarqueeComponent from "react-fast-marquee";

const dataPromise = fetch("/gamingData.json").then((res) => res.json());

const Home = () => {
  const games = use(dataPromise);
  const Marquee = MarqueeComponent.default || MarqueeComponent;

  const { ratings } = games;

  const ThreeGames = [...games]
    // .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
      <section className="text-center">
        <h2 className="text-5xl font-bold text-gray-200 pt-5">
          This is my special gaming website
        </h2>
        <p className="text-gray-300 text-lg font-bold mt-3">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </p>
        <div className="w-4/12 mx-auto h-40 bg-[#072a41] mt-3">
          <Marquee>
            <div className="flex gap-20">
              {ThreeGames.map((game) => (
                <HomeCard key={game.id} game={game}></HomeCard>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* // section 2 */}
    </div>
  );
};

export default Home;

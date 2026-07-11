import React from "react";
import AllGameCard from "./AllGameCard";
import useApps from "../Hooks/useApps";
import { useState } from "react";
// const dataPromise = fetch("/gamingData.json").then((res) => res.json());

const All_Apps = () => {
  // const games = use(dataPromise);
  const { apps } = useApps();

  const [search, setSearch] = useState("");

  //  apps ke khujar jonne search option
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  console.log(searchedApps);

  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-2xl font-bold">All Apps({searchedApps.length})</h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 space-y-3 mt-3">
        {searchedApps.map((game) => (
          <AllGameCard key={game.id} game={game}></AllGameCard>
        ))}
      </div>
    </div>
  );
};

export default All_Apps;

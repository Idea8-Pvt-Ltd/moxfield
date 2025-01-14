import Banner from "../Hero/Banner";
import CardGrid from "./CardGrid";

const MidMain = () => {
  return (
    <>
      <Banner />
      <div className="min-h-screen p-4 bg-gray-800">
        <h1 className="flex justify-center mt-20 text-6xl text-cyan-50 ">
          However you play Magic, we've got you covered.
        </h1>
        <p className="flex justify-center mt-10 text-3xl text-cyan-50">
          We support all the official constructed formats,
        </p>
        <p className="flex justify-center text-3xl text-gray-400 ">
          plus a few community-driven ones.
        </p>
        <CardGrid />
        <Banner />
      </div>
    </>
  );
};

export default MidMain;

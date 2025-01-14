const Banner = () => {
  return (
    <section className="bg-black w-full py-14  ">
      <div className="flex items-center justify-center text-center text-white gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 247"
        >
          <path
            fill="#FF424D"
            d="M45.136 0v246.35H0V0h45.136Zm118.521 0C214.657 0 256 41.343 256 92.343s-41.343 92.343-92.343 92.343s-92.343-41.344-92.343-92.343c0-51 41.344-92.343 92.343-92.343Z"
          />
        </svg>
        <h2 className="font-normal text-xl">
          Support us on Patreon to remove ads and more!
        </h2>
      </div>
    </section>
  );
};

export default Banner;

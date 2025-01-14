function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-48 py-3 text-sm font-inter">
      <div className="flex flex-row text-white bg-none ">
        <img
          src="https://assets.moxfield.net/assets/images/logo-text.svg"
          alt="logo"
          className="w-[150px] h-[30px]"
        />
        <div className="flex justify-between flex-nowrap ">
          <a className="pt-1 pl-10 text-white no-underline " href="#">
            Home
          </a>
          <a className="pt-1 pl-10 text-white no-underline " href="#">
            Explore
          </a>
          <a className="pt-1 pl-10 text-white no-underline " href="#">
            Maxie
          </a>
          <a className="pt-1 pl-10 text-white no-underline " href="#">
            Help
          </a>
        </div>
      </div>
      <div className="flex text-white flex-nowrap justify-evenly">
        <a className="pt-1 pl-10 no-underline " href="#">
          Sign in
        </a>
        <a className="pt-1 pl-10 no-underline " href="#">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

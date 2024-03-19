const Footer = () => {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/819px-TamilNadu_Logo.svg.png";
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-around bg-zinc-700 mb-0 p-4 space-y-4 md:space-y-0">
        <div className="flex space-x-3 place-self-center">
          <img
            src={logo}
            alt="tn-govt-logo"
            className="h-12 md:h-20 place-self-center"
          />
          <div className="flex flex-col text-white place-self-center">
            <p className="text-xs lg:text-md">
              OFFICIAL WEBSITE OF CIVIL SUPPLIES AND CONSUMER PROTECTION
              DEPARTMENT, GOVERNMENT OF TAMILNADU
            </p>
            <p className="text-sm font-bold lg:text-lg">
              E-PUBLIC DISTRIBUTION SYSTEM
            </p>
          </div>
        </div>
        <div className="text-white font-bold place-self-center">
          © All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Header = () => {
  const links = [
    {
      id: 1,
      name: "Features"
    },
    {
      id: 2,
      name: "Pricing"
    },
    {
      id: 3,
      name: "Services"
    },
    {
      id: 4,
      name: "Partners"
    }
  ]
  return (
    <div>
      <div className="bg-white p-5 flex justify-around">
        <div className="flex justify-evenly">
        <img className="mail" src="../mail.png" alt="mail" />
        <h1 className="font-bold	text-3xl">NinjaMail</h1>
        </div>
        <div className="flex justify-around">
        <ul className="md:flex justify-around uppercase font-bold sm:flex justify-around uppercase font-bold hidden ">
          {links.map((link) => {
            return (
              <div>
                <li className="mx-5 my-2 " key={link.id}>
                  {link.name}
                </li>
                <div className="underline"></div>
              </div>
            );
          })}
        </ul>
        <button className="btn text-white uppercase font-fold px-2 ">Sign up free</button>
        </div>
        
      </div>
      <div className="sec flex justify-between ">
         <div>
          <h1 className="brand text-center font-bold text-3xl">
            Create Stunning
          </h1>
          <h1 className="brand1 text-center font-bold text-3xl relative left-10">
            Email Campaigns
          </h1>
          <p className="headPara font-medium mx-5 tracking-normal w-80">
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </p>
          <button className="try tracking-wider text-white uppercase font-bold p-1  ">
            Try now
          </button>
          <button className="demo tracking-widest uppercase font-bold">Get a demo</button>
        </div>
          <img className="img" src="..\image1.png" alt="first" />
      </div> 
      </div>
  );
};
export default Header;

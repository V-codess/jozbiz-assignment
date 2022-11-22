
const Footer = () => {
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
      const links2=[  {
        id: 1,
        name: "About Us"
      },
      {
        id: 2,
        name: "Tutorials"
      },
      {
        id: 3,
        name: "Resources"
      },
      {
        id: 4,
        name: "Help Center"
      },   
      {
        id: 5,
        name: "Templates"
      },
      {
        id: 6,
        name: "Case Studies"
      }]
      const links3 = [  {
        id: 1,
        name: "Medium"
      },
      {
        id: 2,
        name: "Twitter"
      },
      {
        id: 3,
        name: "Facebook"
      },
      {
        id: 4,
        name: "Instagram"
      }, {
        id: 5,
        name:"LinkedIn"
      }]
      const links4 = [
        {
            id: 1,
            name: "Contact Us"
          },
          {
            id: 2,
            name: "Slack"
          },
          {
            id: 3,
            name: "Jobs"
          }
      ]
  return (
    <div>
      <div className="footer">
        <h1 className="h1 text-white text-center text-6xl">
          Get started today!
        </h1>
        <button className="btn1 tracking-wide text-center font-bold uppercase bg-white w-52 h-16">
          Pick a plan
        </button>
      </div>
      <div className="grid grid-flow-col gap-2 m-16">
        <div className="flex justify-evenly">
        <img className="mail" src="../mail.png" alt="mail" />
        <h1 className="font-bold text-3xl">NinjaMail</h1>
        </div>
   <div className="flex justify-evenly">
   <ul>
          {links.map((link) => {
            return (
              <li className=" font-bold x-5 my-2" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </ul>
        <ul>
          {links2.map((link) => {
            return (
              <li className=" font-bold x-5 my-2" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </ul>
        <ul>
          {links3.map((link) => {
            return (
              <li className=" font-bold x-5 my-2" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </ul>
        <ul>
          {links4.map((link) => {
            return (
              <li className=" font-bold x-5 my-2" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </ul>
   </div>
     
      </div>
      <hr className=" mx-32" />
      <div className="flex justify-around text-center font-bold	m-5">
        <p>
          NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
          rights reserved.
        </p>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
      
    </div>
  );
};
export default Footer;

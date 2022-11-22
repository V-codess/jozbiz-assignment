const Section = () => {
    const imgs = [{
        "id":1,
        "img":"../logo1.png", 
        "name":"last Knight"
    },
    {
        "id":2,
        "img":"../logo2.png",
        "name":"dragon eye"

    },
    {
        "id":3,
        "img":"../logo3.png",
        "name":"quest AI"

    },
    {
        "id":4,
        "img":"../logo4.png",
        "name":"Radio Tee"

    },
    {
        "id":5,
        "img":"../logo5.png",
        "name":"Game commerce"

    }]
    const data = [{
        "id":1,
        "name": "Frankie",
        "member":"Member since 2016",
        "img":"../frankie.png"
    },
    {
        "id":2,
        "name": "Camile",
        "member":"Member since 2012",
        "img":"../camile.png"
    },
    {
        "id":3,
        "name": "Elayne",
        "member":"Member since 2018",
        "img":"../elayne.png"
    },
]
    return (
      <div>
        <div className="pics flex justify-evenly">
{data.map((item)=>{
    return (<div >
        <img className="pic" src={item.img} alt={item.name} />
        <h4 className="h4 text-white font-bold text-xl">{item.name}</h4>
        <p className="p text-white font-bold">{item.member}</p>
    </div>)
})}
        </div>

        <h1 className="brand4 text-center font-bold text-3xl ">
          Learn how others are reaching
        </h1>
        <h1 className="brand4 text-center font-bold text-3xl">
          their audience easier than ever before.
        </h1>
        <div className="flex justify-center">
          <input
            className="border rounded-sm mx-4 px-4"
            type="text"
            placeholder="Enter your email"
          />
          <button className="btn uppercase text-white p-2">Join our list</button>
        </div>
        <p className="para text-center">Thanks! Email received.</p>
  
        <h1 className="brand4 text-center font-bold text-xl">
          All the best brands
        </h1>
        <h1 className="brand4 text-center font-bold text-xl">already use us</h1>
        <div className="flex justify-evenly m-12">
         {imgs.map((img)=>{
            return (<img key={img.id} src={img.img} alt={img.name} />)
         })}
        </div>
      </div>
    );
  };
  export default Section;
  
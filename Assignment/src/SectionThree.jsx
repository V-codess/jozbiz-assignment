const SectionThree = ()=>{
    const data = [{
        "id":1,
        "title":"Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.",
        "img":"../photo.png"    
    },
    {
        "id":2,
        "title":" Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.",
        "img":"../photo-1.png"    
    }]

return (
    <div>
<div className="third flex">
   {data.map((item)=>{
    return (
<div key={item.id} className="card m-6 shadow-lg flex justify-center">
  <div className=" shadow-lg bg-white max-w-sm">
      <img  src={item.img} alt=""/>
    <div className="p-6">
      <p className="text-gray-700 text-base mb-4">
       {item.title}
      </p>
      <button type="button" className=" inline-block text-green-700 text-xl text-xs leading-tight">Learn More</button>
    </div>
  </div>
</div>)})}
</div>
    <h1 className="brand3 font-bold ">The source for proven, engaging email campaigns</h1>
    <p className="para1 tracking-wide text-md  ">Whether you’re a startup, small business, e-commerce store, or  want to promote your app, NinjaMail has the feature set tailored for your business. 
</p>
  </div>)

}
export default SectionThree;
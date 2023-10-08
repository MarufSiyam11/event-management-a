import { Link } from "react-router-dom";
const Service = ({service}) => {
    const {id,image,title,description,price} = service;
    return (
       
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    {
      description.length > 80 
      ? <p>{description.slice(0, 80)}<Link className="text-blue-600 font-bold">   Read More...</Link> </p>
      :  <p>{description}</p>
    }
   
    <p>Price : {price}</p>
    <div className="card-actions">
      <button className="btn w-60 btn-primary">Details</button>
    </div>
  </div>
</div>
    
    );
};

export default Service;
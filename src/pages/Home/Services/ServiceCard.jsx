import { FaArrowRight, FaBeer } from 'react-icons/fa';
const ServiceCard = ({service}) => {
    const {img, title, price} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className='flex'>
        <p className="text-xl text-orange-600 font-semibold">Price: ${price}</p>

       <FaArrowRight className='text-orange-600 font-thin'></FaArrowRight>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;

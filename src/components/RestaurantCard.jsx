/* eslint-disable react/react-in-jsx-scope */
import { IMG_CDN } from "../config";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    deliveryTime
}) => (
    <div className="w-[300px] p-5 m-3 shadow-lg bg-blue-100">
        <img className="p-2 rounded-2xl" src={
            IMG_CDN+
            cloudinaryImageId
        } />
        <h2 className="px-2 font-bold">{name}</h2>
        <div className="">
            <h3 className=" px-2 truncate hover:whitespace-normal">{cuisines?.join(", ")}</h3>
        </div>
        {/* {console.log(cuisines)} */}
        <h4 className="px-2">Avg Delivery Time: {deliveryTime} minutes</h4>
    </div>
);

export default RestaurantCard;
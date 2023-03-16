/* eslint-disable react/react-in-jsx-scope */
import { IMG_CDN } from "../config";
const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    deliveryTime
}) => (
    <div className="card">
        <img src={
            IMG_CDN+
            cloudinaryImageId
        } />
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        {/* {console.log(cuisines)} */}
        <h4>Avg Delivery Time: {deliveryTime} minutes</h4>
    </div>
);

export default RestaurantCard;
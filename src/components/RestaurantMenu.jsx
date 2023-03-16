import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const params = useParams();
    const { id } = params;
    const [restaurant, setRestaurant] = useState();

    async function getRestaurantMenu() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + id)
        const json = await data.json();
        setRestaurant(json.data);
    }

    useEffect(() => {
        getRestaurantMenu();
    }, []);
    
    return (!restaurant) ? <Shimmer/> : (
        <div className="menu">
            <div>
                <h1>Restaurant id : {id}</h1>
                <img src={IMG_CDN + restaurant?.cloudinaryImageId} />
                <h1>Restaurant {restaurant?.name}</h1>
                {/* {console.log(restaurant)} */}
                <h2>Rating : {restaurant?.avgRatingString}</h2>
                <h3>Cost: {restaurant?.costForTwoMsg}</h3>
            </div>

            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item?.id}>{item?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default RestaurantMenu;
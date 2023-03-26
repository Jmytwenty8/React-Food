import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const params = useParams();
    const { id } = params;
    const [restaurant, setRestaurant] = useState();

    async function getRestaurantMenu() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId=" + id)
        const json = await data.json();
        setRestaurant(json.data);
    }

    useEffect(() => {
        getRestaurantMenu();
    }, []);
    
    const { cloudinaryImageId, name, avgRatingString, costForTwoMessage, cuisines } = restaurant?.cards[0]?.card?.card?.info || {};

    return (!restaurant) ? <Shimmer/> : (
        <div className="flex justify-evenly items-start m-5">
            <div className="shadow-lg mx-5 bg-blue-100">
                {/* <h1>Restaurant id : {id}</h1> */}
                <img className="p-5" src={IMG_CDN + cloudinaryImageId} />
                <h1 className="px-5 font-bold mx-2">{name}</h1>
                <h2 className="px-5 mx-2">{cuisines.join(', ') }</h2>
                <h2 className="px-5 mx-2">Rating : {avgRatingString}
                    <span className="text-xl m-1 text-yellow-400">&#9733;</span>
                </h2>
                <h3 className="px-5 mx-2 py-2">Cost: {costForTwoMessage}</h3>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-4">Menu</h1>
                <ul className="list-disc ml-4 text-lg text-gray-700">
                    {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((res) => {
                        const data = res?.card?.card;
                        if (data['@type']?.match("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")) {
                            return (data?.itemCards)?.map((rest) => {
                                const name = rest?.card?.info?.name;
                                const id = rest?.card?.info?.id;
                                return (<li key={id}>{name}</li>)
                            })
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}


export default RestaurantMenu;
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
    
    const { cloudinaryImageId, name, avgRatingString, costForTwoMessage } = restaurant?.cards[0]?.card?.card?.info || {};

    return (!restaurant) ? <Shimmer/> : (
        <div className="menu">
            <div>
                {/* <h1>Restaurant id : {id}</h1> */}
                <img src={IMG_CDN + cloudinaryImageId} />
                <h1>{name}</h1>
                <h2>Rating : {avgRatingString}</h2>
                <h3>Cost: {costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
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
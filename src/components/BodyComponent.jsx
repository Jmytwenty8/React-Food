/* eslint-disable react/react-in-jsx-scope */
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, Restaurants) {
    return Restaurants.filter((restaurant) => (
        restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
    ))
}


const BodyComponent = () => {
    const [searchText, setSearchText] = useState();
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.589156&lng=77.302044&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        const restaurants = json?.data?.cards[1]?.data?.data?.cards;
        console.log(restaurants);
        setFilteredRestaurants(restaurants);
        setAllRestaurants(restaurants);
        
    }

    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length === 0) return <h1>No Matching Restaurants Found</h1>
    
    return allRestaurants?.length === 0 ? (
        <Shimmer />
      ): (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-submit"
                    onClick={() => {
                        const filteredData = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(filteredData);
                    }}>
                    Submit
                </button>
            </div>
        
            <div className="restaurant-list">
                    {filteredRestaurants?.length === 0 ? (<h1>No Matching Restaurants Found</h1>) :
                        (filteredRestaurants?.map((restaurant) => (
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                )))}
            </div>
        </>
    )
};

export default BodyComponent;
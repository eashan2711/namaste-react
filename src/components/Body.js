import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	// Local state variable - Super powerful variable
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	const [searchText, setSearchText] = useState("");
  useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.758537&lng=75.88855099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		//  optional chaning
		setListOfRestaurants(json?.data?.cards
      ?.map((card) => card?.card?.card)
      ?.find((card) => card?.gridElements?.infoWithStyle?.restaurants)
      ?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRestaurants(json?.data?.cards
			?.map((card) => card?.card?.card)
			?.find((card) => card?.gridElements?.infoWithStyle?.restaurants)
			?.gridElements?.infoWithStyle?.restaurants);
	}
  
	// Conditional Rendering  with ternary operator

  return listOfRestaurants.length === 0 ? < Shimmer/> : (
    <div className="body">
      <div className="filter">
				< div className="search">
					<input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
				  <button
						onClick={() => {
							// Filter the restaurant cards and update the UI
							// searchText
							console.log(searchText);
							const filteredList = listOfRestaurants.filter
							  ((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
							setFilteredRestaurants(filteredList);
						}}
				  >
					  Search
				  </button>
				</div>
        <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						setListOfRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
        }
      </div>
    </div>
  );
};

export default Body;
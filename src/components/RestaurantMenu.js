import {useEffect} from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    // API call
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.758537&lng=75.88855099999999&restaurantId=403809&catalog_qa=undefined&submitAction=ENTER");
      const json = await data.json();
      console.log(json);
  };
  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li> 
        <li>French Fries</li>
        <li>Coke</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
import React from "react";
import ReactDOM from "react-dom/client";
// building swiggy like app
// Header
  // - Logo
  // - Nav items
// Body
  // - Search
  // - RestaurantContainer
     // - RestaurantCard
       //- Image
       //- Name
       //- Cusines
       //- Rating
       //- delivery time
// Footer
  // - copyright
  // - links
  // - address
  // - contact

const Header = () => {
  return (
    <div className="header">
      <div>
        <img 
        className="logo"
        src="https://img.freepik.com/free-vecfood-shopping-logo-template-design_460848-10299.jpg?semt=ais_hybrid&w=740&q=80" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "79458",
      name: "Shri Kripa Restaurant",
      cloudinaryImageId: "qq7jdpbt2akrzmhvdmsy",
      cuisines: ["Thalis", "Punjabi"],
      avgRating: 4.5,
      costForTwo: "₹250 for two",
      sla: {
        deliveryTime: 41,
      },
    },
  },
  {
    info: {
      id: "880840",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/31/5788aa72-02f1-4bed-bad7-37d462e1e367_880840.JPG",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      costForTwo: "₹400 for two",
      sla: {
        deliveryTime: 14,
      },
    },
  },
  {
    info: {
      id: "722753",
      name: "Wow! China",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/1b9544a0-d091-4128-b7da-a650f9051ac2_722753.JPG",
      cuisines: ["Chinese", "Asian", "fastfood", "Beverages", "Snacks"],
      avgRating: 4.0,
      costForTwo: "₹300 for two",
      sla: {
        deliveryTime: 20,
      },
    },
  },
  {
    info: {
      id: "778987",
      name: "Wendy's Burgers",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/088f9051-d015-4a45-8991-070d40ffb487_778987.JPG",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
      avgRating: 4.2,
      costForTwo: "₹400 for three",
      sla: {
        deliveryTime: 31,
      },
    },
  },
  {
    info: {
      id: "746975",
      name: "Haldiram's Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/6/2997005d-939d-4dbf-95a4-bfe419744d3e_746975.JPG",
      cuisines: [
        "North Indian",
        "Chaat",
        "Chinese",
        "South Indian",
        "Fast Food",
        "Snacks",
        "sandwich",
        "Burger",
        "pizza",
        "Pasta",
      ],
      avgRating: 4.3,
      costForTwo: "₹400 for two",
      sla: {
        deliveryTime: 25,
      },
    },
  },
  {
    info: {
      id: "938368",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/6/d60382fd-ab42-4b85-a8ba-c936ad85bac8_938368.JPG",
      cuisines: [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Sweets",
        "Juices",
        "Bengali",
      ],
      avgRating: 4.6,
      costForTwo: "₹200 for two",
      sla: {
        deliveryTime: 23,
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

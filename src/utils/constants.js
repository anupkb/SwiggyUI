const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

exports.LOGO_IMG_URL =
  "https://logolook.net/wp-content/uploads/2023/04/Swiggy-Logo.png";

exports.CLOUDINARY_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

exports.RES_DATA_API =
  CORS_PROXY +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

exports.RES_MENU_API =
  CORS_PROXY +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2960587&lng=85.8245398&restaurantId=";

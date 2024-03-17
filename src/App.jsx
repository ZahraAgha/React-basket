import { useContext } from "react";
import "./App.css";
import styles from "./module.css";
import BasketContext from "./context/BasketContext";
import WishlistContext from "./context/WishlistContext";
import product1 from "./assets/These Filling High-Protein Smoothies That Will Instantly Curb Your Appetite.jpg";
import product2 from "./assets/How to cook with quince and two quince recipes_ Quince paste and quince chutney.jpg";
import product3 from "./assets/Premium Photo _ Fresh mango fruit with cut and green leafs isolated.jpg";
import product4 from "./assets/Pineapple Fruit White Transparent, Pineapple Fruit Pineapple, Pineapple Clipart, Pineapple, Fruit PNG Image For Free Download.jpg";
import product5 from "./assets/Pomegranate Fragrance Oil _ Moksha Lifestyle Products.jpg";

const productsData = [
  { id: 1, name: "Apple", price: 1, count: 0, imageUrl: product1 },
  { id: 2, name: "Heyva", price: 2, count: 0, imageUrl: product2 },
  { id: 3, name: "Mango", price: 5, count: 0, imageUrl: product3 },
  { id: 4, name: "Ananas", price: 8, count: 0, imageUrl: product4 },
  { id: 5, name: "Nar", price: 3, count: 0, imageUrl: product5 },
];

function App() {
  const { addToBasket } = useContext(BasketContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id == productId);
  return (
    <div>
      <ul className={styles.ul}>
        {productsData &&
          productsData.map((item) => (
            <li key={item.id}>
              <img className="" src={item.imageUrl} alt={item.name} />
              <h1>{item.name}</h1>
              <p>Price:{item.price}</p>
              <button onClick={() => addToBasket(item)}>Add Basket</button>
              <button
                onClick={() => addToWishlist(item)}
                style={{ background: isInWishlist(item.id) ? "red" : "blue" }}
              >
                Add Wishlist
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;

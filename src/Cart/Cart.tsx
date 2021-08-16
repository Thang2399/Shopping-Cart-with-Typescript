// styled
import { Wrapper } from "./Cart.styles";

// Component
import CartItemsList from "../Cart_Items_List/CartItemsList";

// Component
// import

// Type
import { CartSingleItemType } from "../App";

type Props = {
	handleAddToCart: (clickedItem: CartSingleItemType) => void;
	handleRemoveFromCart: (id: number) => void;
	cartList: CartSingleItemType[];
};
const Cart: React.FC<Props> = ({
	cartList,
	handleAddToCart,
	handleRemoveFromCart,
}) => {
	console.log(cartList);

	return (
		<Wrapper>
			<h2>Your shopping cart</h2>
			{cartList.length === 0 ? <p>No items here!</p> : null}
			{cartList.map((item) => {
				return (
					<CartItemsList
						key={item.id}
						item={item}
						handleAddToCart={handleAddToCart}
						handleRemoveFromCart={handleRemoveFromCart}
					/>
				);
			})}
		</Wrapper>
	);
};

export default Cart;

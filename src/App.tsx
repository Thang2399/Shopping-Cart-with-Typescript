// React hooks
import { useState, useEffect } from "react";
// import { useQuery } from "react-query";

// Components
import Cart from "./Cart/Cart";
import SingleItem from "./Single_Item/SingleItem";

// MaterialUI Components
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

// Styles
import { Wrapper, StyledButton } from "./App.styles";

// URL
const url = "https://fakestoreapi.com/products";

// Type for the items
export type CartSingleItemType = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	amount: number;
	category: string;
};

function App() {
	// Items list
	const [itemsList, setItemsList] = useState([] as CartSingleItemType[]);

	// Open/Close the cart's condition
	const [cartOpen, setCartOpen] = useState(false);

	// Cart Items
	const [cartList, setCartList] = useState([] as CartSingleItemType[]);
	console.log(cartList);

	const getProducts = async (): Promise<CartSingleItemType[]> => {
		let products = [];
		try {
			const data = await fetch(url);
			products = await data.json();

			setItemsList(products);
			return products;
		} catch (error) {
			console.log(error);
		}
		return products;
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleAddToCart = (clickedItem: CartSingleItemType) => {
		console.log("Added item the cart");

		// clickedItem =  item was clicked
		setCartList((items) => {
			// 1. Item already exists in the cart.
			const isItemAdded = items.find((item) => item.id === clickedItem.id);
			if (isItemAdded) {
				return items.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item,
				);
			}

			// 2. Add a new item to the cart item
			return [...items, { ...clickedItem, amount: 1 }];
		});
	};

	const getTotalItems = (items: CartSingleItemType[]) => {
		return items.reduce((prev: number, item) => {
			return prev + item.amount;
		}, 0);
	};

	const handleRemoveFromCart = (id: number) => {
		setCartList((items) => {
			let reducedItems = items.reduce((previous, item) => {
				if (item.id === id) {
					if (item.amount === 0) return previous;
					else {
						return [...previous, { ...item, amount: item.amount - 1 }];
					}
				} else {
					return [...previous, item];
				}
			}, [] as CartSingleItemType[]);

			let removedItem = reducedItems.filter((item) => item.amount !== 0);

			return removedItem;
		});
	};

	if (itemsList.length === 0) return <LinearProgress />;

	return (
		<Wrapper>
			<Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
				<Cart
					handleAddToCart={handleAddToCart}
					handleRemoveFromCart={handleRemoveFromCart}
					cartList={cartList}
				/>
			</Drawer>
			<StyledButton onClick={() => setCartOpen(true)}>
				<Badge badgeContent={getTotalItems(cartList)} color='error'>
					<AddShoppingCart />
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{itemsList?.map((item) => {
					return (
						<Grid item xs={12} sm={4} key={item.id}>
							<SingleItem item={item} handleAddToCart={handleAddToCart} />
						</Grid>
					);
				})}
			</Grid>
		</Wrapper>
	);
}

export default App;

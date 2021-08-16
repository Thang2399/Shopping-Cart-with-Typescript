// MaterialUI Component
import { Button } from "@material-ui/core";

// Type
import { CartSingleItemType } from "../App";

// styles
import { Wrapper } from "./SingleItem.styles";

type Props = {
	item: CartSingleItemType;
	handleAddToCart: (clickedItem: CartSingleItemType) => void;
};

const SingleItem: React.FC<Props> = ({ item, handleAddToCart }) => {
	return (
		<Wrapper>
			<img src={item.image} alt={item.title} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h5>${item.price}</h5>
			</div>
			<Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
		</Wrapper>
	);
};

export default SingleItem;

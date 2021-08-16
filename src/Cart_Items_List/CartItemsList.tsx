// Styled
import { Wrapper } from "./CartItemsList.styles";

// MaterialUI
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

// Type
import { CartSingleItemType } from "../App";

type Props = {
	item: CartSingleItemType;
	handleAddToCart: (clickedItem: CartSingleItemType) => void;
	handleRemoveFromCart: (id: number) => void;
};

const CartItemsList: React.FC<Props> = ({
	item,
	handleAddToCart,
	handleRemoveFromCart,
}) => {
	return (
		<Wrapper>
			<div>
				<h3>{item.title}</h3>
				<div className='information'>
					<p>$ {item.price}</p>
					<p>Total: ${(item.price * item.amount).toFixed(2)}</p>
				</div>
				<div className='buttons'>
					<Button
						size='small'
						variant='contained'
						disableElevation
						onClick={() => handleRemoveFromCart(item.id)}>
						<RemoveCircleIcon />
					</Button>
					<p>{item.amount}</p>
					<Button
						size='small'
						variant='contained'
						disableElevation
						onClick={() => handleAddToCart(item)}>
						<AddCircleIcon />
					</Button>
				</div>
			</div>
			<img src={item.image} alt={item.title} />
		</Wrapper>
	);
};

export default CartItemsList;

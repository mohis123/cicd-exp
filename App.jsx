import React, { useState } from "react";

const initialItems = [
	{
		id: 1,
		title: "Apple iPhone 15 Pro",
		price: 129900,
		quantity: 1,
		image: "https://m.media-amazon.com/images/I/81CgtwSII3L._SL1500_.jpg",
	},
	{
		id: 2,
		title: "Sony Wireless Headphones",
		price: 7499,
		quantity: 2,
		image: "https://m.media-amazon.com/images/I/51nN4HjL7KL._SL1080_.jpg",
	},
];

export default function CartPage() {
	const [cartItems, setCartItems] = useState(initialItems);

	const totalAmount = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	// Remove item by id
	const handleRemove = (id) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	// Add a sample item
	const handleAddItem = () => {
		const newItem = {
			id: Date.now(),
			title: "New Sample Item",
			price: 999,
			quantity: 1,
			image: "https://via.placeholder.com/60",
		};
		setCartItems([...cartItems, newItem]);
	};

	return (
		<div>
			<h1>Simple Cart</h1>
			<button onClick={handleAddItem}>Add Item</button>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<ul>
						{cartItems.map((item) => (
							<li key={item.id} style={{ marginBottom: "16px" }}>
								<img
									src={item.image}
									alt={item.title}
									style={{
										width: "60px",
										height: "60px",
										objectFit: "contain",
									}}
								/>
								<span style={{ marginLeft: "12px" }}>{item.title}</span>
								<span style={{ marginLeft: "12px" }}>₹{item.price}</span>
								<span style={{ marginLeft: "12px" }}>
									Qty: {item.quantity}
								</span>
								<button
									style={{ marginLeft: "12px" }}
									onClick={() => handleRemove(item.id)}
								>
									Remove
								</button>
							</li>
						))}
					</ul>
					<div>
						<strong>Total: ₹{totalAmount.toLocaleString()}</strong>
					</div>
				</>
			)}
		</div>
	);
}
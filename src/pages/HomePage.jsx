import ProductList from "../components/products/ProductList";

function HomePage() {
	return (
		<>
			<h1>Products</h1>
			<div className="flex-card">
				<ProductList/>
			</div>
		</>
	);
}

export default HomePage;
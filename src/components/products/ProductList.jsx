import { useQuery } from "@tanstack/react-query";
import { url } from "../../constants/api";
import { Link } from "react-router-dom";

async function getProducts() {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("There was an error fetching the products");
	}

	return response.json();
}

function ProductsList() {
	const {
		isPending,
		error,
		data: products,
		isFetching,
	} = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
		staleTime: 1000 * 60 * 5, 
	});

	if (isPending) return <div>Loading...</div>;

	if (error) return "An error has occurred: " + error.message;

	return (
		<>
			{products?.map((product) => {
				return (
					<div key={product.id} className="mb-5">
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						<Link to={`/product/${product.id}`}>View Product</Link>
					</div>
				);
			})}
		</>
	);
}

export default ProductsList;

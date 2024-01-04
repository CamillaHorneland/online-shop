import { useParams } from "react-router-dom";
import { url } from "../../constants/api";
import { useQuery } from "@tanstack/react-query";

async function getProduct(id) {
	const response = await fetch(`${url}/${id}`);

	if (!response.ok) {
		throw new Error("There was an error fetching the product");
	}

	return response.json();
}

function ProductDetail() {
	const { id } = useParams();

	const { isPending, error, data } = useQuery({
		queryKey: ["product", id],
		queryFn: () => getProduct(id),
		staleTime: 1000 * 60 * 5, 
	});

	if (isPending) return <div>Loading...</div>;

	if (error) return "An error has occurred: " + error.message;
    
    const discount = data.discountedPrice && data.price
      ? data.price - data.discountedPrice
      : 0;

	return (
		<>
			{data && (
				<>
					<h2>{data.title}</h2>
                    <img src={data.imageUrl} alt={data.title} />
                    <p>{data.description}</p>
                    <p style={{ textDecoration: discount > 0 ? "line-through" : "none" }}>Price: ${data.price}</p>
                    {data.discountedPrice && (
                      <>
                         <p>Discounted Price: ${data.discountedPrice}</p>
                         <p>Discount: ${discount}</p>
                      </>
                    )}
                    
                    {data.reviews && data.reviews.length > 0 && (
                        <>
                        
                          <h3>Reviews:</h3>
                          {data.reviews.map((review, index) => (
                              <div key={index}>
                                  <p>User: {review.username}</p>
                                  <p>Rating: {review.rating}</p>
                                  <p>Description: {review.description}</p>
                              </div>
                            ))}
                        </>
			        )}
		        </>
	        )}
        </>
    );
}

export default ProductDetail;
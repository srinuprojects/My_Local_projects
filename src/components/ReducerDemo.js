import { useEffect, useReducer, useState } from "react";

// Define reducer before usagefunction reducer(state, action) {
function reducer(state, action) {
    switch (action.type) {
        case 'like':
            return { ...state, likes: state.likes + 1 };
        case 'dislike':
            return { ...state, dislikes: state.dislikes + 1 };
        default:
            return state;
    }
}


const initialState = { likes: 0,dislikes:0 };

export default function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/8") // Correct endpoint
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching product:", error));
    }, []);

    return (
        <div className="container-fluid">
            <h2>Product Details</h2>

            {product ? (
                <div className="card p-2" style={{ width: '200px' }}>
                    <img src={product.image} alt={product.title} className="card-img-top" height="160" />
                    <div className="card-header">
                        <p>{product.title}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <h2>Likes Counter - {state.likes}</h2>
            <h2>dislikes Counter - {state.dislikes}</h2>
            <button onClick={() => dispatch({ type: 'like' })}>
                <span className="bi bi-hand-thumbs-up"></span> Likes
            </button>
            <button onClick={() => dispatch({ type: 'dislike' })}>
                <span className="bi bi-hand-thumbs-down"></span> Dislikes
            </button>
        </div>
    );
}

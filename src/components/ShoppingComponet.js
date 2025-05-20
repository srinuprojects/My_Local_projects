import { useState,useEffect } from "react";


export default function ShoppingComponet()
{
    const [categories,setCategories]=useState([])
    const [products,setproducts]=useState([])
    const [cardItems,SetCardItems]=useState([])

    function loadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data =>{
            data.unshift('All');
            setCategories(data);
        })

    }
    function handleCateoryChange(e){
        console.log('@@@@@@@@',e.target.value)
        if(e.target.value === 'all'){
            LoadProducts('https://fakestoreapi.com/products');


        }
        const url = `https://fakestoreapi.com/products/category/${e.target.value}`;
        LoadProducts(url)


    }
    function LoadProducts(url){
        console.log('entereddd',url)
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log('#####',data)
            setproducts(data);
        })
    
    }

    function HandleAddtoCard(e){
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response =>response.json())
        .then(data =>{
            SetCardItems(data);
            console.log('@@@@',cardItems)
        })

    }



    useEffect(()=>{
        loadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    },[])
    

    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart"></span>Shopping home</h1>
            </header>
            <section className="row" >
                <nav className="col-3">
                    <div>
                        <label>select a category</label>
                        <div>
                            <select onChange={handleCateoryChange} className="form-select">
                              {
                                categories.map(cate => 
                                    <option key={cate} value={cate.toLowerCase()}>
                                        {cate}
                                    </option>
                                )
                                  

                              }
                             
                                
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                    {
                        products.map(product=>
                            <div className="card m-2 p-2 w-25">
                                <img src={product.image} className="card-img-top" height="150"/>
                            <div className="card-header" style={{height:'160px'}}>
                                <p>{product.title}</p>

                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success"></span>
                                        {product.rating.rate}<span>[{product.rating.count}]</span>
                                    </dd>
                                </dl>

                            </div>
                       
                        <div className="card-footer">
                            <button onClick={HandleAddtoCard} className="btn btn-danger">
                                <span className="bi bi-cart4"></span>Add to Cart
                            </button>


                        </div>
                        </div>
                    
                    )        
                    }


                </main>
            </section>

        </div>
    )
}
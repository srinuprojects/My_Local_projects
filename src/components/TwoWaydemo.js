import React from "react";

export default class TwoWayClassDemo extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            title :'product details',
            Name:'SamSung Tv',
            Price:56000.44,
            Stock :true,
            Cities:['Delhi','Hyd'],
            Rating :{rate:4.5,count:6700}
        }
    }
    render(){
        return (
            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock==true)?"Available":"Out Of Stock"}</dd>
                    <dt>Cities</dt>
                    <dd>
                        <ol>
                            {
                                this.state.Cities.map(city=>
                                    <li key={city}>{city}</li>
                                )
                            }
                        </ol>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        <span className="bi bi-star-fill text-success"></span>{this.state.Rating.rate} [{this.state.Rating.count}]
                    </dd>
                </dl>

            </div>
        )
    }
}
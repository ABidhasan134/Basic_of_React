import React from "react";

const info=[
    {
        price: 2304,
        Retteing: 3.56,
        discript: "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"      
    },
    {
        price: 3040,
        Retteing: 4.56,
        discript: "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"      
    },
    {
        price: 4040,
        Retteing: 5,
        discript: "Description: Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"      
        
    }
]

function Card(){
    
    return(
        <div>
            <h1>here we go</h1>
            {info.map((Name,index)=><article>
                <p>{Name.price}</p>
                <p>{Name.Retteing}</p>
                <p>{Name.discript}</p>
            </article>)}
            </div>
    )
}
export default Card;
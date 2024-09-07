import React, { useEffect, useState } from "react"
// import image from "../../assets/images/image.jpg"

const CombinedComponent = () =>{
    const [products, setProduct] = useState([])
    const [cosmetics, setCosmetic] = useState([])


    const NewArrival = () => {
    useEffect(()=> {
        const url = 'https://dummyjson.com/products/category/tops'
        fetch (url)
        .then(res => res.json())
        .then (data => setProduct(data?.products))
        .catch(err => console.error(err))
    
} ,[])
}
   console.log("Products -->", products);
    
    
   const TopSelling = () => {
      useEffect(()=> {
        const url_ = "http://dummyjson.com/products/category/mobile-accessories"
        fetch(url_)
        .then(response => response.json())
        .then(data1 => setCosmetic(data1?.products))
        .catch(err => console.error(err))
        
    }, [])}


    NewArrival()
    TopSelling()
    console.log("Cosmetics -->", cosmetics);


    return (
    <>
        <div style={{backgroundColor: 'white'}}>
        <p style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold' }}>NEW ARRIVALS</p>
          <div style={{display: 'flex', wrap: 'wrap', width: '100%'}}> 
           {products.slice(0, 5).map((product, index)=> (
                    <div key={index} style={{width: '100%', height: '25%', margin: '10px'}}>
                        <img src={product.images[0]} alt="" style={{width:"350px"}}/>
                        <p style={{color: 'grey', fontSize: '30px', marginLeft: '90px',}}>{product.title}</p>
                        <p style={{marginLeft: '120px'}}>{product.price}</p>
                    </div>
                    
           )
        
        )}
           <div style={{width: '600px', height: '40px', backgroundColor: 'white', borderRadius: '37px', position: 'relative', right: '950px', top: '500px', border: '1px solid black'}}> 
        <p style={{fontSize: '7px', fontWeight: 'bold', padding: '5px',  color: 'black'}}>View All</p>   
            </div>
              </div>
              </div>
            
        <div style={{backgroundColor: 'white'}}>
        <p style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold' }}>TOP SELLING</p>
          <div style={{display: 'flex', wrap: 'wrap', width: '100%'}}> 
           {cosmetics.slice(0, 5).map((cosmetic, index)=>{
            return (
                <div key={index} style={{width: '100%', height: '25%', margin: '10px'}}>
                    <img src = {cosmetic.images[0]} alt="" style={{width:"350px"}}/>
                    <p style={{color:'grey', fontSize: '30px', marginLeft: '90px',}}>{cosmetic.title}</p>
                    <p style ={{marginLeft: '120px'}}> {cosmetic.price}</p>
                </div>
            )})}
                <div style={{width: '600px', height: '40px', backgroundColor: 'white', borderRadius: '37px', position: 'relative', right: '950px', top: '550px', border: '1px solid black'}}> 
        <p style={{fontSize: '7px', fontWeight: 'bold', padding: '5px',  color: 'black'}}>View All</p>   
            </div>
            </div>
            </div>
         </>
    )
}

export default CombinedComponent

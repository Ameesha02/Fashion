import React from 'react'
import {client,urlFor} from "../../../../lib/client"

export const dynamicParams = true;
export const generateStaticParams=async()=>{
  const query=`*[_type == "product"]{
    slug{
current
    }
  }`
const products=await client.fetch(query);
console.log(products);
const paths=products.map((product)=>({
params:{
  slug:product.slug.current
}
}));
 return {paths};
}

const getPosts =async({params:{slug}})=> {
// const data= await generateStaticParams();
  const query=`*[_type == "product" && slug.current=='${slug}'][0]`;
  const productsQuery='*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  console.log(products);
  console.log(product);
  return {
    props:{products,product}
  }
};

const ProductDetails = async() => {

  {console.log("is function getting calleddd");}
const data= await getPosts();
const {image,name,details,price}=data.props.products;
   
  return (

    <div>
    <div className="product-detail-container">
       <div> 
        <div className="image-container">
        <img src={urlFor(image && image[0])} alt="" />
        </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails;


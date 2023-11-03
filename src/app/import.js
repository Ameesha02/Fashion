export const getStaticPaths=async()=>{
    const query=`*[_type == "product"]{
      slug{
  current
      }
    }`
  const products=await client.fetch(query);
  const paths=products.map((product)=>({
  params:{
    slug:product.slug.current
  }
  }));
  return {
    paths,fallback:'blocking'
  }
  }
  export const getStaticProps =async({params:{slug}})=> {
  
    const query=`*[_type == "product" && slug.current=='${slug}'][0]`;
    const productsQuery='*[_type == "product"]';
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    // const bannerQuery='*[_type == "banner"]';
    // const bannerData = await client.fetch(bannerQuery);
    return {
      props:{products,product}
    }
  };
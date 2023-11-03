import React from 'react'
import {client} from '../../lib/client'
import { Product,FooterBanner,HeroBanner, Navbar, Footer } from '../../components'
 async function getData() {

  const query='*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery='*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  // if (!products.ok || !bannerData.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
// {console.log(bannerData)}
  return {
    props:{products,bannerData}
  }
};
const Home =async ({products,bannerData}) => {
  const data= await getData();
//  { console.log(data.props.bannerData.length)}
  return (
    <>
    <Navbar/>
  <HeroBanner heroBanner={data.props.bannerData.length && data.props.bannerData[0]}/>
  {/* {console.log(data.props.bannerData[0].image.asset._ref)} */}
    <div className='products-heading'>
    <h2>best selling product</h2>
    <p>spreaker of many variant</p>
    </div>

    <div className='products-container'>
      {data.props.products?.map((product)=><Product key={product._id} product={product}/>)}</div>
      <FooterBanner footerBanner={data.props.bannerData && data.props.bannerData[0]}/>
      <Footer/>
      </>
  )
};
// export async function getData() {
//   const bannerData=xyz;
//   // const bannerData = await fetch('https://<hgzellt2>.api.sanity.io/v<2023-10-01>/<Banner>')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // if (!res.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error('Failed to fetch data')
//   // }
 
//   return {bannerData}
// }

// export async function getServerSideProps() {
//   const data = await getData();
//   return {
//     props: data,
//     revalidate: 1, // revalidate every 1 second
//   };
// }
//  async function Page() {
//   const data = await getData()
 
//   return <main></main>
// }

export default Home;


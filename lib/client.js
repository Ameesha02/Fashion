// import sanityClient from 'createClient'
import imageUrlBuilder from '@sanity/image-url'
import {createClient} from 'next-sanity';

// Use createClient to create a Sanity client instance
export const client =createClient({
  projectId: 'hgzellt2',
  dataset: 'production',
  apiVersion:'2023-10-01',
  useCdn:true,
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN
  // other configuration option
});
const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);
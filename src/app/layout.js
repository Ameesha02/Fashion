import {Main} from '../../components/Main';
import './globals.css';
// import { Layout2 } from '../../components';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout({ children }) {
 return (
  
     <html lang="en">

     <body>
        {children} 
        </body>
        
    </html>
 
   
  )
}

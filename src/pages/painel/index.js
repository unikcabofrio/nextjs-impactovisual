import { useState } from 'react'

import { verifyToken } from '@/utils/authUtils';

import NavMenu from '@/Views/painel/Menu'
import Produtos from '@/Views/painel/Produtos'

export default function Index(props) {
    const [sheet,setSheet] = useState("products")
    return(
        <>
            <NavMenu setSheet={setSheet}/>
            {sheet == "products"? <Produtos sheet={sheet}/> : <>{sheet}</>}
        </>
    )
}

export async function getServerSideProps(context) {
    const token = context.req.cookies.token;
  
    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    try {
      
      const decodedToken = verifyToken(token);
      return {
        props: {
          userData: decodedToken,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  }
import { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { verifyToken } from '@/utils/authUtils';

import NavMenu from '@/Views/painel/Menu'
import Produtos from '@/Views/painel/products'

export default function Index(props) {

  const router = useRouter();
  const [screen, setSreen] = useState(<Produtos/>)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validateToken = async () => {
    const tokenCookies = getCookie('token')
    await fetch('/api/validateToken', {
      method: "POST",
      body: JSON.stringify({
        token: tokenCookies
      })
    })
      .then(async (result) => {

        if (!result.ok) { 
          throw new Error; 
        }

        const res = await result.json()
        if (JSON.stringify(res.result) == JSON.stringify(props.userData)) {
          // SE FOR VALIDO POSSO POR ALGUMA FUNÇÃO AQUI DENTRO
        }
      })
      .catch(() => {
        router.push('/login');
      });

  }

  useEffect(() => {
    setInterval(()=>{
      validateToken()
    },1000)
  }, [validateToken])

  return (
    <div className='_main'>
      <NavMenu setSreen={setSreen} />
      <div style={{width:'100%'}}>
        {screen}
      </div>
      {/*
      {sheet == "products" ? <Produtos sheet={sheet} /> : <>{sheet}</>} */}
    </div>
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

    const tokenSecurity = process.env.JWT_TOKEN
    const decodedToken = verifyToken(token, tokenSecurity);
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
import { useState } from 'react'

import Login from '@/Views/Login'

export default function Index() {
    const [sheet,setSheet] = useState("products")
    return(
        <>
            <Login/>
        </>
    )
}
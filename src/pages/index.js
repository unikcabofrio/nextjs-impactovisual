import { useEffect, useState } from "react";

import Loading from "@/Views/Loading";
import Header from "@/Views/Address";
import SearchBar from "@/components/searchBar";
import ListProducts from "@/Views/ListProducts";

export default function Index() {
  const [preload, setIsPreload] = useState(true);
  const [contact,setContact] = useState([])
  const [products,setProducts] = useState([])
  const [productsFilter,setProductsFilter] = useState([])

  async function getListProducts() {

    await fetch('/api/contact')
      .then(async (result)=>{
        const res = await result.json()
        setContact(res.data)
      })

    await fetch('/api/products')
      .then(async (result)=>{
        const res = await result.json()

        setIsPreload(false)
        setProducts(res.data)
        setProductsFilter(res.data)
      })
  }
  
  useEffect(() => {
    getListProducts()
  }, [setIsPreload]);

  return (
    <div className="main">
      {
      preload ? 
      <Loading /> : 
      <>
        <SearchBar products={products} setProductsFilter={setProductsFilter}/>
        <ListProducts products={productsFilter}/>
        <Header contact={contact}/>
      </>
      }
    </div>
  );
}

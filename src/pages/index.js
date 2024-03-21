import { useEffect, useState } from "react";

import Loading from "@/Views/Loading";
import SearchBar from "@/components/searchBar";
import ListProducts from "@/Views/ListProducts";

export default function Index() {
  const [preload, setIsPreload] = useState(true);
  const [products,setProducts] = useState([])
  const [productsFilter,setProductsFilter] = useState([])

  async function getListProducts() {
    await fetch('/api/getProducts')
    .then(async (result)=>{
      const products = await result.json()
      
      setInterval(()=>{
        setIsPreload(false)
      },2000)
      setProducts(products.posts)
      setProductsFilter(products.posts)
    })
  }
  
  useEffect(() => {
    getListProducts()
  }, [setIsPreload]);

  return (
    <>
      {
      preload ? 
      <Loading /> : 
      <>
        <SearchBar products={products} setProductsFilter={setProductsFilter}/>
        <ListProducts products={productsFilter}/>
      </>
      }
    </>
  );
}

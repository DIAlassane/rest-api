import React from 'react'
import { useGetProductsQuery } from '../../../api/Api';

export const ProductsDash = () => {
    const { data, isLoading } = useGetProductsQuery();
    console.log("data", data);
  return (
    <div>
        
    </div>
  )
}

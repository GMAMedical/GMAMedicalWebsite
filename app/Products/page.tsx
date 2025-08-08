'use client';
import { useEffect, useState } from "react";
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { StorageImage } from '@aws-amplify/ui-react-storage';


const client = generateClient<Schema>()

import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs)


export default function Products() {

  // // TESTING: reading from backend (ToDo)
  // const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  // const fetchTodos = async () => {
  //   const { data: items, errors } = await client.models.Todo.list({ authMode: 'identityPool' });
  //   console.log("Fetched Todos:", items, errors);
  //   setTodos(items);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);


  // PRODUCT CARD: reading from backend
  const [products, setProducts] = useState<Schema["Product"]["type"][]>([]);
  
    const fetchProducts = async () => {
      const { data: items, errors } = await client.models.Product.list({ authMode: 'identityPool' });
      console.log("Fetched Products:", items, errors);
      setProducts(items);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);


  return (
    <div>

      <div id='banner-top-products' className="relative text-center mt-[45px]">

        <img 
          src="/Images/plasma-blue.jpg" alt="Plasma Blue Background"
          className="w-full blur-sm"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">

          <h1
            className="text-[45px] font-bold font-roboto-condensed text-gma-text-white w-full md:text-[68px] lg:text-[120px]"
          >
            PRODUCTS
          </h1>

          <h3
            className="mt-2 text-[13px] px-[5px] font-roboto-condensed text-gma-text-white lg:text-[20px]"
          >
            Browse our broad quality selection of products.
          </h3>

        </div>

      </div>

      <div id='filter-options'>
        {/* TODO add filter options here */}
      </div>

      <div id='product-card-container' className="grid grid-cols-1 md:grid-cols-3 p-7 md:p-15">

          {products.map(({ id, title, companyName, images }) => (
            <div
              id="product-card"
              className="border-4 border-gma-text-white bg-gma-text-white rounded-lg shadow-xl/30 mb-7 mx-auto w-[90%] sm:w-[80%] md:w-[300px] lg:w-[350px]"
              key={id}
            >
              <StorageImage 
                alt={title + " Image"} 
                // just remembered I could use these(``) for making string templates lol
                path={`images/${title}/${images?.[0] || "placeholder.png"}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[305px] object-cover"  
              />

              <h1 className="text-center font-roboto-condensed text-base sm:text-lg">{companyName}</h1>
              <div className="border-4 border-gma-gray bg-gma-gray p-3 sm:p-5 m-3 sm:m-5">
                <h1 className="text-gma-text-white text-center text-xl sm:text-2xl font-roboto-condensed font-bold">
                  {title}
                </h1>
              </div>
            </div>
          ))}
      </div>
    
    </div>
  );
}
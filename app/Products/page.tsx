'use client';
import { useEffect, useState } from "react";
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { StorageImage } from '@aws-amplify/ui-react-storage';
import Link from "next/link";
import { Search } from 'lucide-react';
import { X } from 'lucide-react';

const client = generateClient<Schema>()

import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs)


export default function Products() {

  const [filterStatus, setFilterStatus] = useState(false);

  const [applyFilters, setApplyFilters] = useState(false);

  const [products, setProducts] = useState<Schema["Product"]["type"][]>([]);

  const [search, setSearch] = useState("");

  const [nonDupCompany, setNonDupCompany] = useState<string[]>([]);

  const [nonDupTypeOfProd, setNonDupTypeOfProd] = useState<string[]>([]);

  const [filteredProd, setFilteredProd] = useState<Schema["Product"]["type"][]>([]);

  const [appliedCompanies, setAppliedCompanies] = useState<string[]>([]);

  const [appliedTypes, setAppliedTypes] = useState<string[]>([]);
  
  const fetchProducts = async () => {
    const { data: items, errors } = await client.models.Product.list({ authMode: 'identityPool' });
    console.log("Fetched Products:", items, errors);
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const decideDup = () => {

    const uniqueCompanies = new Set<string>();
    const uniqueTypeOfProd = new Set<string>();

    for (const product of products) {

      if (product.companyName?.trim()) {
        uniqueCompanies.add(product.companyName.trim());
      }
      if (product.typeOfProduct?.trim()) {
        uniqueTypeOfProd.add(product.typeOfProduct.trim());
      }

    }

    setNonDupCompany(Array.from(uniqueCompanies));
    setNonDupTypeOfProd(Array.from(uniqueTypeOfProd));
  };

  useEffect(() => {
    decideDup();
  }, [products]);

  const [companyOption, setCompanyOptions] = useState<
    { company: string; isItChecked: boolean }[]
  >([]);

  const [typeOfProductOption, setTypeOfProductOption] = useState<
    { typeOfProduct: string; isItChecked: boolean }[]
  >([]);

  useEffect(() => {
    setCompanyOptions(nonDupCompany.map((company) => ({
      company,
      isItChecked: false
    })));
  }, [nonDupCompany]);

  useEffect(() => {
    setTypeOfProductOption(nonDupTypeOfProd.map((typeOfProduct) => ({
      typeOfProduct,
      isItChecked: false
    })));
  }, [nonDupTypeOfProd]);

  const onChangeCheckBox = (e: {
    target: { checked: boolean; value: React.SetStateAction<string> };
  }) => {
    const { value, checked: isItChecked } = e.target;

    setCompanyOptions((prev) =>
      prev.map((c) => {
        if (c.company === value) c.isItChecked = isItChecked;
        return c;
      })
    )
  };

  const onChangeCheckBox2 = (e: {
    target: { checked: boolean; value: React.SetStateAction<string> };
  }) => {
    const { value, checked: isItChecked } = e.target;

    setTypeOfProductOption((prev) =>
      prev.map((t) => {
        if (t.typeOfProduct === value) t.isItChecked = isItChecked;
        return t;
      })
    )
  };

  const filterSearch = () => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (appliedCompanies.length > 0) {
      result = result.filter((product) =>
        appliedCompanies.includes(product.companyName?.trim() || "")
      );
    }

    if (appliedTypes.length > 0) {
      result = result.filter((product) =>
        appliedTypes.includes(product.typeOfProduct?.trim() || "")
      );
    }

    setFilteredProd(result);
  };

  useEffect(() => {
    filterSearch();
  }, [search, products, appliedCompanies, appliedTypes]);

  
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


      <div id='filter-options' className="mt-[35px] flex flex-col md:flex-row justify-center">
        <div id="search-bar" className="relative flex items-center text-gray-400 focus-within:text-gray-600 ml-[16px] md:ml-0">

          < Search className="absolute ml-3 pointer-events-none"/>

          <input 
            type="text"
            className="bg-gma-text-white py-[6px] pl-[38px] pr-[85px] focus:font-semibold rounded-2xl border-none ring-2 ring-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 focus:text-black"
            placeholder="search here..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <button className="absolute ml-78" onClick={() => setSearch("")}>
            <X className="text-red-500"/>
          </button>
          

        </div>

        <div id="filter-tab" className="mt-[25px] md:ml-[55px] md:mt-0 flex flex-col items-center">

          <button
            className="bg-gma-text-white hover:bg-gray-100 py-[6px] px-[35px] text-gma-text-p font-roboto-condensed border-2 rounded-2xl active:outline-2"
            onClick={() => {
              if (filterStatus == true) {
                setFilterStatus(false)
              } else {
                setFilterStatus(true)
              }
            }}
          >
            Filter
          </button>

          {filterStatus && (
            <div id="filter-dropdown" className="absolute bg-gma-text-white px-[85px] mt-[55px] border-2 rounded-2xl">

              <div className="flex flex-col justify-start font-roboto">

                <h2 className="my-[8px] text-2xl">Companies</h2>
                {companyOption.map(( item, index ) => (
                  <label key={index} className="flex flex-row">    
                    <input 
                      type="checkbox" 
                      className="mx-[5px]" 
                      value={item.company}
                      onChange={onChangeCheckBox}
                      checked={item.isItChecked}
                    />    
                  {item.company}
                  </label>
                ))}
                
                <h2 className="mt-[15px] mp-[8px] text-2xl">Type of Product</h2>
                {typeOfProductOption.map(( item, index) => (
                  <label key={index} className="flex flex-row">    
                    <input 
                      type="checkbox" 
                      className="mx-[5px]" 
                      value={item.typeOfProduct}
                      onChange={onChangeCheckBox2} 
                      checked={item.isItChecked}
                    />    
                  {item.typeOfProduct}
                  </label>
                ))}
                
                <div className="my-[12px]">

                  <button 
                    className="m-3 bg-gma-text-white hover:bg-gray-100 border-2 py-[4px] px-[12px] rounded-2xl active:outline-2"
                    onClick={() => {
                      setAppliedCompanies([]);
                      setAppliedTypes([]);
                      setApplyFilters(false);

                      setCompanyOptions((prev) =>
                        prev.map((c) => ({ ...c, isItChecked: false }))
                      );
                      setTypeOfProductOption((prev) =>
                        prev.map((t) => ({ ...t, isItChecked: false }))
                      );
                    }}
                  >
                    Clear
                  </button>

                  <button 
                    className="m-3 text-gma-text-white bg-gma-gray hover:bg-stone-600 border-2 border-gma-text-p py-[4px] px-[12px] rounded-2xl active:outline-2 active:outline-gma-text-p"
                    onClick={() => {
                      setAppliedCompanies(
                        companyOption.filter((c) => c.isItChecked).map((c) => c.company)
                      );
                      setAppliedTypes(
                        typeOfProductOption.filter((t) => t.isItChecked).map((t) => t.typeOfProduct)
                      );
                      setApplyFilters(true);
                      setFilterStatus(false);
                    }}
                  >
                    Apply
                  </button>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      
      <div id='product-card-container' className="grid grid-cols-1 md:grid-cols-3 p-7 md:p-15">

          {(search || applyFilters ? filteredProd : products).map(({ id, title, companyName, images }) => (
            <div
              id="product-card"
              className="border-4 border-gma-text-white bg-gma-text-white rounded-lg shadow-xl/30 mb-7 mx-auto w-[90%] sm:w-[80%] md:w-[300px] lg:w-[350px] hover:scale-105 transition-transform duration-200"
              key={id}
            >
              <Link key={id} href={"/Products/" + id}>
              <div className="w-full h-[200px] md:h-[300px]">
                <StorageImage 
                  alt={`${title} Image`} 
                  path={`images/${title}/${images?.[0] || "placeholder.png"}`}
                  objectFit="contain"
                  height="100%"
                  width="100%"
                />
              </div>

              <h1 className="text-center font-roboto-condensed text-base sm:text-lg">{companyName}</h1>
              <div className="border-4 border-gma-gray bg-gma-gray p-3 sm:p-5 m-3 sm:m-5">
                <h1 className="text-gma-text-white text-center text-xl sm:text-2xl font-roboto-condensed font-bold">
                  {title}
                </h1>
              </div>
              </Link>
            </div>
          ))}
      </div>
    
    </div>
  );
}
"use client"
import { useEffect, useState } from "react";
import type { Schema } from '../../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { use } from 'react'
import { StorageImage } from '@aws-amplify/ui-react-storage';

const client = generateClient<Schema>()

import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";
import Link from "next/link";
Amplify.configure(outputs)


export default function ProductsPage({params,}: {params: Promise<{ slug: string }>}) {
    const { slug } = use(params);

    const [product, setProduct] = useState<Schema["Product"]["type"] | null>(null);    

    const getProductByID = async () => {
        const { data: items, errors } = await client.models.Product.get({ id: slug, }, { authMode: "identityPool"});
        console.log("Fetched Products:", items, errors);
        setProduct(items);
    }

    useEffect(() => {
        getProductByID();
    }, [])

    return (
        <div className="flex flex-col items-center">

            
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2">
                {product?.images?.map((image, index) => (
                    <StorageImage
                        key={index}
                        alt={`${product.title} Image`} 
                        path={`images/${product.title}/${image || "placeholder.png"}`}
                        className="block w-[275px] h-[275px] sm:h-[250px] md:h-[500px] md:w-[550] object-cover m-[25px] border-5"
                        style={{ aspectRatio: '1 / 1' }}
                    />
                ))}
            </div>
            

            <div id="title" className="py-8 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-roboto-condensed text-center">
                    {product?.title}
                </h1>
            </div>

            <div id="companyName" className="flex flex-col items-center bg-gma-gray w-full py-12 px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gma-text-white font-roboto-condensed mb-2 underline">
                    - Company Name -
                </h3>
                <h1 className="text-2xl sm:text-3xl font-bold text-gma-text-white font-roboto-condensed">
                    {product?.companyName}
                </h1>
            </div>

            <div id="typeOfProduct" className="flex flex-col items-center py-12 px-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-roboto-condensed mb-2 underline">
                    - Type Of Product -
                </h3>
                <p className="text-xl sm:text-2xl font-bold font-roboto-condensed text-center max-w-md">
                    {product?.typeOfProduct}
                </p>
            </div>

            <div id="description" className="flex flex-col items-center bg-gma-gray w-full py-12 px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gma-text-white font-roboto-condensed mb-2 underline">
                    - Description -
                </h3>
                <p className="text-base sm:text-lg text-gma-text-white font-roboto-condensed max-w-3xl text-center leading-relaxed">
                    {product?.description}
                </p>
            </div>

            <div id="indications" className="flex flex-col items-center py-12 px-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-roboto-condensed mb-2 underline">
                    - Indications -
                </h3>
                <p className="text-base sm:text-lg font-roboto-condensed max-w-3xl text-center leading-relaxed">
                    {product?.indications}
                </p>
            </div>

            <div className="my-12">
                <Link href="/Products" className="bg-gma-blue p-[15px] px-[40px] py-[12px] w-[200px] mx-auto rounded-full text-gma-text-white font-roboto-condensed font-bold text-[25px] hover:bg-blue-700 hover:text-[26px]">
                    Back to Products
                </Link>
            </div>


        </div>
    )

}
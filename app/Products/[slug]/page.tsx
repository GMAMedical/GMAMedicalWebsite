"use client"
import { useEffect, useState } from "react";
import type { Schema } from '../../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import { use } from 'react'
import { StorageImage } from '@aws-amplify/ui-react-storage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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

            <div id="image-carousel">
                <Carousel className="w-[350px] md:w-[650px] md:h-[700px] mt-[65px] bg-[#235CAD]" infiniteLoop>
                    {product?.images?.map((image, index) => (
                    <div key={index} className="h-[500px] md:h-[700px] pt-[35px]">
                        <StorageImage
                        alt={`${product.title} Image`}
                        path={`images/${product.title}/${image || "placeholder.png"}`}
                        objectFit="contain"
                        height="90%"
                        width="100%"
                        />
                    </div>
                    ))}
                </Carousel>
            </div>

            <div id="title" className="py-10 px-6 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto-condensed text-[#235CAD]">
                    {product?.title}
                </h1>
            </div>

            <div 
                id="companyName" 
                className="flex flex-col items-center bg-[#235CAD] py-12 px-6 rounded-xl shadow-lg w-full max-w-4xl mx-auto"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-roboto-condensed mb-3 underline decoration-2 underline-offset-4">
                    - Company Name -
                </h3>
                <h1 className="text-2xl sm:text-3xl font-bold text-white font-roboto-condensed">
                    {product?.companyName}
                </h1>
            </div>

            <div 
                id="typeOfProduct" 
                className="flex flex-col items-center py-12 px-6 bg-white rounded-xl shadow-lg mt-8 w-full max-w-4xl mx-auto"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#235CAD] font-roboto-condensed mb-3 underline decoration-2 underline-offset-4">
                    - Type Of Product -
                </h3>
                <p className="text-lg sm:text-xl font-bold font-roboto-condensed text-center max-w-md text-gray-800">
                    {product?.typeOfProduct}
                </p>
            </div>

            <div 
                id="description" 
                className="flex flex-col items-center bg-[#235CAD] py-12 px-6 rounded-xl shadow-lg mt-8 w-full max-w-4xl mx-auto"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-roboto-condensed mb-3 underline decoration-2 underline-offset-4">
                    - Description -
                </h3>
                <p className="text-base sm:text-lg text-white font-roboto-condensed max-w-3xl text-center leading-relaxed">
                    {product?.description}
                </p>
            </div>

            <div 
                id="indications" 
                className="flex flex-col items-center py-12 px-6 bg-white rounded-xl shadow-lg mt-8 w-full max-w-4xl mx-auto"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#235CAD] font-roboto-condensed mb-3 underline decoration-2 underline-offset-4">
                    - Indications -
                </h3>
                <p className="text-base sm:text-lg font-roboto-condensed max-w-3xl text-center leading-relaxed text-gray-800">
                    {product?.indications}
                </p>
            </div>

            <div className="my-12 flex justify-center">
                <Link 
                    href="/Products" 
                    className="bg-[#235CAD] px-8 py-3 rounded-full text-white font-roboto-condensed font-bold text-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-200 shadow-md"
                >
                    Back to Products
                </Link>
            </div>


        </div>
    )

}
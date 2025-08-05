'use client';
import { useEffect, useState } from "react";
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from "next/navigation";
import { signOut } from 'aws-amplify/auth';

import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs, { ssr: true })

const client = generateClient<Schema>()

function Admin() {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        await getCurrentUser(); // throws if not logged in
        setLoading(false);
      } catch {
        router.push("/Login");
      }
    };
    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };


  // // TESTING: reading from backend (ToDo)
  //   const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);
  
  //   const fetchTodos = async () => {
  //     const { data: items, errors } = await client.models.Todo.list({ authMode: 'identityPool' });
  //     console.log("Fetched Todos:", items, errors);
  //     setTodos(items);
  //   };
  
  //   useEffect(() => {
  //     fetchTodos();
  //   }, []);

  // // TESTING: writing to backend (ToDo)
  // const createTodo = async () => {
  //     await client.models.Todo.create(
  //       {
  //          content: window.prompt("Todo content?")
  //       },
  //       { 
  //         authMode: 'identityPool'
  //     })

  // }

  // // TESTING: deleting ToDo
  // const deleteTodo = async (id: any) => {
  //   const { data: deletedTodo, errors } = await client.models.Todo.delete({id},{ authMode: 'identityPool'})

  // }




  // PRODUCT CARD: writing to backend
    // TODO" appear message on screen that product has been added
      // TODO: find a way to clear form after product has been added
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeOfProduct, setTypeOfProduct] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [indications, setIndications] = useState("");

  const createProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const promise = await client.models.Product.create(
        {
          title,
          description,
          typeOfProduct,
          companyName,
          indications,
        },
        { authMode: "identityPool" }
      );

      console.log("Product created:", promise);

      // Clear form fields
      setTitle("");
      setDescription("");
      setTypeOfProduct("");
      setCompanyName("");
      setIndications("");

      // Refresh list
      fetchProducts();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }


  // PRODUCT CARD: reading product
  const [products, setProducts] = useState<Schema["Product"]["type"][]>([]);

  const fetchProducts = async () => {
    const { data: items, errors } = await client.models.Product.list({ authMode: 'identityPool' });
    console.log("Fetched Products:", items, errors);
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  // PRODUCT CARD: deleting product
  const deleteProduct = async (id: any) => {
    await client.models.Product.delete({id},{ authMode: 'identityPool'})

  }






  if (!loading) return (

    <div>

      <div id='title-admin' className='text-center bg-gma-gray p-[55px] w-5/6 mx-auto rounded-2xl mt-[55px]'>
        <h1 className='font-roboto-condensed text-gma-text-white text-[65px] font-bold'>ADMIN PAGE</h1>
        <h3 className='font-roboto-condensed text-gma-text-white text-[20px]'>This is the page where you can add & delete Products.</h3>
      </div>

      <div id='add-product-section' className='w-full text-center pt-[55px]'>

        <div className='flex justify-center'>
          <div className='flex flex-col items-center'>
            <h1 className='font-roboto-condensed text-gma-text-title text-[65px] font-bold'>Add Product</h1>
            <hr className='w-86 border-t-4 border-gma-text-title mt-2' />
          </div>
        </div>

        <form onSubmit={createProduct} className="flex flex-col">

          <label htmlFor="title" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Title</label>
          <input type="text" id="title" name="title" className="border-2 mx-[555px]" onChange={(e) => setTitle(e.target.value)}/>

          <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Images</h2>
          {/* TODO add photo selector */}

          <label htmlFor="description" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Description</label>
          <input type="text" id="description" name="description" className="border-2 mx-[555px]" onChange={(e) => setDescription(e.target.value)}/>

          <label htmlFor="typeOfProduct" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Type of Product</label>
          <input type="text" id="typeOfProduct" name="typeOfProduct" className="border-2 mx-[555px]" onChange={(e) => setTypeOfProduct(e.target.value)}/>

          <label htmlFor="companyName" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Company Name</label>
          <input type="text" id="companyName" name="companyName" className="border-2 mx-[555px]" onChange={(e) => setCompanyName(e.target.value)}/>

          <label htmlFor="indications" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Indications</label>
          <input type="text" id="indications" name="indications" className="border-2 mx-[555px]" onChange={(e) => setIndications(e.target.value)}/>

          <input type="submit" value="Add Product" className="border-2 border-black mx-[680px] bg-gma-blue text-gma-text-white mt-[20px]"/>

        </form>

        {/* <button onClick={createTodo}>Click Me</button> */}

      </div>

      <div id="delete-product-section" className="mt-[55px]">

        
        <div className='flex justify-center'>
          <div className='flex flex-col items-center'>
            <h1 className='font-roboto-condensed text-gma-text-title text-[45px] md:text-[65px] font-bold'>Delete Product</h1>
            <hr className='w-86 border-t-4 border-gma-text-title mt-2' />
          </div>
        </div>      

        {products.map(({ id, title }) => (
          <div className="m-[50px] flex flex-row justify-center items-center" key={id}>
            <h3 className="text-2xl font-roboto-condensed border-2 p-[18px] px-[55px]">{title}</h3>
            <button onClick={() => deleteProduct(id)} className="ml-[25px] border-2 border-red-600 px-4 py-2 text-2xl bg-red-800 rounded-2xl text-gma-text-white font-roboto font-extrabold hover:bg-red-700">X</button>
          </div>
        ))}
        


        {/* Testing Todo - delete
        <div>
          {todos.map(({ id, content }) => (
            <div key={id}>
              <h3>{content}</h3>
              <button onClick={() => deleteTodo(id)} className="text-red-600 bg-red-700 p-5">X</button>
            </div>
          ))}
        </div> */}

      </div>

      <div id="sign-out-section" className="flex justify-center my-[55px]">
        <button onClick={() => handleSignOut()} className="border-2 border-blue-600 px-4 py-2 text-2xl bg-gma-blue rounded-2xl text-gma-text-white font-roboto font-extrabold hover:bg-blue-700">Sign out</button>
      </div>

    </div>
  );

}

export default Admin;
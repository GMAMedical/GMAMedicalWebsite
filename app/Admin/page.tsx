'use client';
import { useEffect, useState } from "react";
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from "next/navigation";
import { signOut } from 'aws-amplify/auth';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { list, remove } from 'aws-amplify/storage';
import '@aws-amplify/ui-react/styles.css';


import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs, { ssr: true })

const client = generateClient<Schema>()

function Admin() {


  // authentication and page routing process
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
    // TODO: find a way to clear form after product has been added
  const [title, setTitle] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [typeOfProduct, setTypeOfProduct] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [indications, setIndications] = useState("");

  // for seeing errors or image processing logs
  const [files, setFiles] = useState({});

  // for helping see writing product error
  const [productErr, setProductErr] = useState("");

  const createProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const promise = await client.models.Product.create(
        {
          title,
          images,
          description,
          typeOfProduct,
          companyName,
          indications,
        },
        { authMode: "identityPool" }
      );

      setTitle("");
      setImages([]);
      setDescription("");
      setTypeOfProduct("");
      setCompanyName("");
      setIndications("");

      fetchProducts();

    } catch (error) {
      setProductErr("Error creating product:" + error);
    }
  }


  // PRODUCT CARD: reading product from backend
  const [products, setProducts] = useState<Schema["Product"]["type"][]>([]);

  // for helping see products that arent displayed and seeing product log errors
  const [productLog, setProductLog] = useState("");

  const fetchProducts = async () => {
    const { data: items, errors } = await client.models.Product.list({ authMode: 'identityPool' });
    setProductLog("Fetched Products:" + items + " " + errors);
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  // PRODUCT CARD: deleting product from backend
  const [showMsgDlt, setShowMsgDlt] = useState(false);
  const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));

  // for helping see process logs on images
  const [imgErr, setImgErr] = useState("");
  const [imgOut, setImgOut] = useState("");

  const deleteProduct = async (id: any, title: any) => {
    await client.models.Product.delete({id},{ authMode: 'identityPool'})

    // Message for deleting product
    setShowMsgDlt(true);
    await delay(2000);
    setShowMsgDlt(false);
    fetchProducts();

    // delete images in S3 bucket
    deleteImgAll(title);

  }

  const deleteImgAll = async (title: any) => {
    try {
      const { items } = await list({
        path: `images/${title}/`,
      });

      await Promise.all(items.map((file) => remove({ path: file.path })));

      setImgOut(`Deleted all images for ${title}`);
    } catch (error) {
      setImgErr('Error deleting images:' + error);
    }
  }

  const deleteImgSingle = async (title: any, imageName: any) => {
    try {
      await remove({
        path: `images/${title}/${imageName}`,
      });
      
      setImgOut(`Deleted ${imageName} from ${title}`);
    } catch (error) {
      setImgErr('Error deleting image:' + error);
    }
  }


  // Message for adding product
  const [showMsgAdd, setShowMsgAdd] = useState(false);

  const msgAddProudct = async () => {

    setShowMsgAdd(true);
    await delay(2000);
    setShowMsgAdd(false);

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

        <form onSubmit={createProduct} className="flex flex-col items-center">

          <label htmlFor="title" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Title</label>
          <textarea
            placeholder="- enter title here -"
            id="title"
            name="title"
            className="border-2 w-[300px] md:w-[500px] text-center py-[15px] text-[19px] md:text-[25px] resize-none"
            onChange={(e) => setTitle(e.target.value)}
          />

          <h2 className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Images</h2>
          <FileUploader
            acceptedFileTypes={['image/*']}
            path={"images/" + title + "/"}
            bucket="productImages"
            maxFileCount={6}
            isResumable
            onFileRemove={({ key }) => {
              if (!key) return;
              setFiles((prevFiles) => ({
                ...prevFiles,
                [key]: undefined as any,
              }));
              setImages((prev) => prev.filter((name) => name !== key.split('/').pop()));
              // remove single image from bucket
              const imageName = key.split('/').pop() ?? '';
              deleteImgSingle(title, imageName);
            }}
            onUploadError={(error, { key }) => {
              if (!key) return;
              setFiles((prevFiles) => ({
                ...prevFiles,
                [key]: { status: 'error' },
              }));
            }}
            onUploadSuccess={({ key }) => {
              if (!key) return;
              const fileName = key.split('/').pop() ?? '';

              setFiles((prevFiles) => ({
                ...prevFiles,
                [key]: { status: 'success' },
              }));

              // Only add if not already in the list
              setImages((prev) =>
                prev.includes(fileName) ? prev : [...prev, fileName]
              );
            }}
            onUploadStart={({ key }) => {
              if (!key) return;
              setFiles((prevFiles) => ({
                ...prevFiles,
                [key]: { status: 'uploading' },
              }));
            }}
          />

          <label htmlFor="description" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Description</label>
          <textarea
            placeholder="- enter description here -"
            id="description"
            name="description"
            className="border-2 w-[300px] md:w-[500px] text-center py-[15px] pb-[250px] text-[19px] md:text-[25px] resize-none"
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="typeOfProduct" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Type of Product</label>
          <textarea
            placeholder="- enter type of product here -"
            id="typeOfProduct"
            name="typeOfProduct"
            className="border-2 w-[300px] md:w-[500px] text-center py-[15px] text-[19px] md:text-[25px] resize-none"
            onChange={(e) => setTypeOfProduct(e.target.value)}
          />

          <label htmlFor="companyName" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Company Name</label>
          <textarea
            placeholder="- enter company name here -"
            id="companyName"
            name="companyName"
            className="border-2 w-[300px] md:w-[500px] text-center py-[15px] text-[19px] md:text-[25px] resize-none"
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <label htmlFor="indications" className="font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]">Indications</label>
          <textarea
            placeholder="- enter indications here -"
            id="indications"
            name="indications"
            className="border-2 w-[300px] md:w-[500px] text-center py-[15px] text-[19px] md:text-[25px] resize-none"
            onChange={(e) => setIndications(e.target.value)}
          />

          <input
            type="submit"
            value="Add Product"
            className="border-2 border-blue-600 px-4 py-2 text-2xl bg-gma-blue rounded-2xl text-gma-text-white font-roboto font-extrabold hover:bg-blue-700 mt-[25px]"
            onClick={() => msgAddProudct()}
          />

        </form>

        <div className={showMsgAdd ? "flex justify-center pt-[50px]" : "hidden"}>
          <div className="flex flex-row border-2 border-green-500 bg-green-600 px-[30px] rounded-4xl">
            <img 
              src="Images/ICONS/green-check.png" 
              alt="Green Check Mark" 
              className=""
            />
            <p className="text-gma-text-white font-bold font-roboto mt-[20px] ml-[8px]">Product Added Successfully!</p>
          </div>
        </div>

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
            <button onClick={() => deleteProduct(id, title)} className="ml-[25px] border-2 border-red-600 px-4 py-2 text-2xl bg-red-800 rounded-2xl text-gma-text-white font-roboto font-extrabold hover:bg-red-700">X</button>
          </div>
        ))}

        <div className={showMsgDlt ? "flex justify-center pt-[50px]" : "hidden"}>
          <div className="flex flex-row border-2 border-green-500 bg-green-600 px-[30px] rounded-4xl">
            <img 
              src="Images/ICONS/green-check.png" 
              alt="Green Check Mark" 
              className=""
            />
            <p className="text-gma-text-white font-bold font-roboto mt-[20px] ml-[8px]">Product Deleted Successfully!</p>
          </div>
        </div>
        
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
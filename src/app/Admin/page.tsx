

export default function Admin() {
  return (
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

        <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Title</h2>
        {/* TODO add title form */}

        <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Images</h2>
        {/* TODO add photo selector */}

        <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Description</h2>
        {/* TODO add description form */}

        <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Type of Product</h2>
        {/* TODO add type_of_product form */}

        <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Company Name</h2>
        {/* TODO add company_name form */}

        <h2 className='font-roboto-condensed text-gma-text-title text-[55px] font-bold mt-[35px]'>Indications</h2>
        {/* TODO add indications form */}

      </div>
      
    </div>
  );
}


export default function Products() {
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

      <div id='product-card-container'>

      </div>
    
    </div>
  );
}
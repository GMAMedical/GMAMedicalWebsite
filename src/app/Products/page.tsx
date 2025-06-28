import Header from '../Components/Header'
import Footer from '../Components/Footer'



export default function Products() {
  return (
    <div>
      < Header />

      <div id='banner-top-products'>
        <h1>PRODUCTS</h1>
        <h3>Browse our broad quality selection of products.</h3>
        <img src="/Images/plasma-blue.jpg" alt="Plasma Blue Background" />
      </div>

      <div id='filter-options'>
        {/* TODO add filter options here */}
      </div>

      <div id='product-card-container'>

      </div>
    

      < Footer />
    </div>
  );
}
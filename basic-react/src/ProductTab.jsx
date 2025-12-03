import Product from "./product";


function ProductTab() {
    let options =["hi-tech","durable","fast"];
    //let options2 ={a:"hi-tech",b:"durable",c:"fast"}
    return(
        <>
  <Product title="phone" price={20000}  />
  <Product title="laptop" price={65000} />
  <Product title="watch"  price={500} />
  </>
    );
}

export default ProductTab;
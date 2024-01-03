

export default function Cloth() {

   async function fetchProductData() {
      let response = await fetch('www.company.com/products');
      let data = await response.json();
      // do stuff with data
      console.log(data);
      }
      fetchProductData();
    return(
       <div>
          <p>Hello World!</p>
       </div>
    );
 }




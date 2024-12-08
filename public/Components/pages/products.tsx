import React from "react";
import Link from "next/link";


const Products = () => {
  return (
    <>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-4 py-8 mx-auto" style={{paddingLeft: "30px", paddingRight: "30px"}}>
            <div className="flex justify-center sm:justify-between gap-x-6 gap-y-8">
              {/* Product 1 */}
              
              <div className="w-full sm:w-auto">
             
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="px-12 w-[56vh] h-auto object-cover object-center"
                   
                    src="https://m.media-amazon.com/images/I/619x3LpKq7S._AC_UL320_.jpg"
                  />
                </a>
                 
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Clothing
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Zelda Hoodie
                  </h2>
                  <p className="mt-1 text-sm">$16.00</p>
                </div>
              </div>
              {/* Product 2 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/71jdr9u9YhL._AC_UL320_.jpg"
                    style={{marginTop: "60px"}}
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Electronics
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Sceptre Monitor
                  </h2>
                  <p className="mt-1 text-sm">$21.15</p>
                </div>
              </div>
              {/* Product 3 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/81uhZBIiSYL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    PC Components
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    NVIDIA GPU
                  </h2>
                  <p className="mt-1 text-sm">$12.00</p>
                </div>
              </div>
              {/* Product 4 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/81WnsNEQOFL._AC_UL320_.jpg"
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Clothing
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Gamer T-Shirt
                  </h2>
                  <p className="mt-1 text-sm">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-4 py-8 mx-auto " style={{paddingLeft: "30px", paddingRight: "30px"}}>
            <div className="flex justify-center sm:justify-between gap-x-6 gap-y-8">
              {/* Product 5 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/612lHVmV1uL._AC_UL320_.jpg"
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Skincare
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Byoma Serum
                  </h2>
                  <p className="mt-1 text-sm">$16.00</p>
                </div>
              </div>
              {/* Product 6 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/71eUau89I9L._AC_UL320_.jpg"
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Toys
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Geodesic Dome
                  </h2>
                  <p className="mt-1 text-sm">$21.15</p>
                </div>
              </div>
              {/* Product 7 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/615CbF7dxCL._AC_UL320_.jpg"
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Kitchenware
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Utensil Set
                  </h2>
                  <p className="mt-1 text-sm">$12.00</p>
                </div>
              </div>
              {/* Product 8 */}
              <div className="w-full sm:w-auto">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center"
                    src="https://m.media-amazon.com/images/I/81KgiN2x7pL._AC_UL320_.jpg"
                  />
                </a>
                <div className="mt-2 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                    Clothing
                  </h3>
                  <h2 className="text-gray-900 text-lg font-medium">
                    PlayStation Hat
                  </h2>
                  <p className="mt-1 text-sm">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Products;

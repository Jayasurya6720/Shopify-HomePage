import React, { useState } from "react";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Cards from "./component/Cards";


const App = () => {
  let [cartValue,setValue] = useState(0)
  let details = [{
    listItem : "Fancy Product",
    price : {
      old : "$40.00-",
      new : "$80.00"
    },
    rating : false,
    discount : false
  },
  {
    listItem : "Special Item",
    price : {
      old : "$20.00",
      new : "$80.00"
    },
    rating : true,
    discount : true,
  },
  {
    listItem : "Sale Item",
    price : {
      old : "$50.00",
      new : "$25.00"
    },
    rating : false,
    discount: true
  },
  {
    listItem : "Popular Item",
    price : {
      old : "",
      new : "$40.00"
    },
    rating : true,
    discount : false
  },
  {
    listItem : "Sale Item",
    price : {
      old : "$50.00",
      new : "$25.00"
    },
    rating : false,
    discount : true
  },
  {
    listItem : "Fancy Product",
    price : {
      old : "$120.00-",
      new : "$280.00"
    },
    rating : false,
    discount : false
  },
  {
    listItem : "Special Item",
    price : {
      old : "$20.00",
      new : "$18.00"
    },
    rating : true,
    discount : true
  },
  {
    listItem : "Popular Item",
    price : {
      old : "",
      new : "$40.00"
    },
    rating : true,
    discount : false
  }]
  return (
    <>
      <Nav cartValue = {cartValue}/>
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
           {
            details.map((e,i)=>{
              return  <Cards data = {e} kay = {i}  setValue = {setValue}/>
            })
           }
            
          </div>
        </div>
      </section>
    </>
  )
}

export default App

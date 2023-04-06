import React, { useEffect, useState } from "react";

function Card () {
  const API = "http://localhost:3000";
  const [isOrdered1, setIsOrdered1] = useState(false);
  const [isOrdered2, setIsOrdered2] = useState(false);
  const [isOrdered3, setIsOrdered3] = useState(false);
  const [data, setData] = useState([]);

  const getdata = async() => {
    await fetch(`${API}/cars`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  useEffect(() => {
    getdata()

  },[])
  
  const handleClick1 = () => {
    setIsOrdered1(true);
  };
  
  const handleClick2 = () => {
    setIsOrdered2(true);
  };
  
  const handleClick3 = () => {
    setIsOrdered3(true);
  };
    

    return (
        <>
            <hr></hr>
            <div className="container" id="prices">
                <div className="section">
                   {
                    data.length ?
                    data.map(el => {
                      return (
                        <div className="card">
                        <img src={el.img} alt=""></img>
                        <div className="cardbody">
                            <h2>{el.title} </h2>
                            <p className="para1">{el.price}</p><span><strong>Per Month</strong></span>
                            <p>{el.description}</p>
                            <button disabled={isOrdered1} onClick={handleClick1}>{isOrdered1 ? 'Ordered' : 'Buy Now'}</button>

                        </div>
                    </div>   
                      )
                    })
                    :
                    <p>LOADING...</p>
                   }

                </div>
            </div>
        </>
    )
  };

export default Card;
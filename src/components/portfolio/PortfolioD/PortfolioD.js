import React, { useState } from "react";
import PortfolioData from './PortfolioData';
import './PortfolioD.css'


const allCatValues = [...new Set(PortfolioData.map((curElem) =>  curElem.category )), "all" ];
const PortfolioD = () => {
    const [items, setItems] = useState(PortfolioData);
    const [catItems, setCatItems] = useState(allCatValues);
  
    const filterPortfolioData = (category) => {
      if(category === "all"){
        setItems(PortfolioData);
        return;
      }
      const updatedItems = PortfolioData.filter((curElem) => {
        return curElem.category === category;
      });
  
      setItems(updatedItems);
    };
    return (
      <>
        <h1 className="heading-main">Websites That I Make</h1>
        <hr />
        <div className="cont-main">
          <div className="PortfolioData">
          {
            catItems.map((curClem, index )=>{
              return <button
              className="button-class"
              key={index}
              onClick={() => filterPortfolioData(curClem)}
            >
              {curClem}
            </button>
            })
          }
          </div>
        </div>
  
        <div className="content-box">
          {items.map((elem) => {
            const { id, name, image, description, code, webLink, descriptionb } = elem;
  
            return (
              <div className="boxes" key={id}>
                <div className="box2">
                  <div className="box-img">
                    <img src={image} alt={name} />
                  </div>
                  <div className="box-head-desc">   
                    <h3 className="box-heading">{name}</h3>
                    <p className="box-description">{description}</p>
  
                    <div className="box-buttons">
                      <a href={code} target="_blank"> 
                        {/* <button className="button-16">Code</button> */}
                      </a>
                      <a href={webLink} target="_blank">
                        <button className="button-17">Website</button>
                      </a>
                    </div>
                    {/* <p className="box-description">{descriptionb}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
};

export default PortfolioD;
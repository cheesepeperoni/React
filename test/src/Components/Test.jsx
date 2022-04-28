import './Test.css'
import React, { useState } from 'react'

const Test = () => {
  const leftRow = ["0","1","2","3","4","5"]
  const [item, setItem] = useState("");
  
  let box= [];
  for(let i=0; i < 6;i++){
    box.push("");
  }

  const itemClick = (e) =>{
     setItem(item => e.target.innerText);
    
  }
  const onclickLeft =(a,b)=>{
    const leftContainer = document.getElementsByClassName('leftContainer');
    const lc = leftContainer[a];
    const lcChild= lc.children[b];
   
    
    if(lcChild.innerText==""){
      lcChild.append(item)
    }else{
      alert("Left Append Test")
    }
  }

  const onclickRight =(a)=>{
    const rightBox = document.getElementsByClassName('rightBox');
    const r = rightBox[a]
  
    if(r.innerText==""){
      r.append(item)
    }else{
      alert("Right Append Test")
    }
  }

  
  const onclickBottomUp = (a) =>{
    const bottomUp = document.getElementById("bottomContainerUp");
    
    const buChild = bottomUp.children[a];

    if(buChild.innerText==""){
      buChild.append(item)
    }else{
      alert("Up Append Test")
    }
  }

  const onclickBottomDown= (a) =>{
    const bottomDown = document.getElementById("bottomContainerDown");
    const bdChild = bottomDown.children[a];

    if(bdChild.innerText==""){
      bdChild.append(item)
    }else{
      alert("Down Append Test")
    }
  }


const items=[
  {
    item:"prd1"
  },
  {
    item:"prd2"
  },
  {
    item:"prd3"
  },
  {
    item:"prd4"
  },
  {
    item:"prd5"
  },
  {
    item:"prd6"
  },
  {
    item:"prd7"
  },
  {
    item:"prd8"
  },
  {
    item:"prd9"
  },
  {
    item:"prd10"
  },

]

  return (
    <div className='container'>
      <div className='left' >
       {leftRow.map((lrIndex)=>(
          <div className="leftContainer" key={lrIndex}>
          {box.map((content,index)=>(
              <div className="leftBox" key={index} onClick={() => onclickLeft(lrIndex,index)}>
                {content}
              </div>
            ))}
          </div>
        ))}
      </div>


      <div className="right">
        <div className="rightContainer">
          {box.map((content,index)=>(
              <div className="rightBox" key={index} onClick={()=>onclickRight(index)}>
                {content}
              </div>
           ))}
        </div>
      </div>

      <div className="list">
        <div className="items">
          <div className="itemTitle">
            PRODUCT
          </div>
            {items.map((item,index)=>(
              <div className="item" key={index} onClick={itemClick}>
                {item.item}
              </div>
            ))}
        </div>
      </div>

      <div className="bottom">
          <div className="bottomUp">
            <div id="bottomContainerUp">
            {box.map((content,indexUp)=>(
              <div className="bottomBox" key={indexUp} onClick={() => onclickBottomUp(indexUp)}>
                {content}
              </div>
            ))}
          </div>
          </div>

          <div className="bottomDown">
            <div id="bottomContainerDown">
            {box.map((content,indexDown)=>(
              <div className="bottomBox" key={indexDown} onClick={() => onclickBottomDown(indexDown)}>
                {content}
              </div>
              ))}
            </div>
          </div>
      </div> 


    </div>
  )
}

export default Test
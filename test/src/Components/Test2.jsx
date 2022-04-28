import React ,{useState} from 'react'
import './Test2.css'

const Test2 = () => {
  const headerBox1 =[];
for(let i=0; i < 62;i++){
  headerBox1.push("")
}
const headerBox2 =[];
for(let i=0; i < 93;i++){
  headerBox2.push("")
}
const footerBox =[];
for(let i=0; i < 76;i++){
  footerBox.push("")
}
const leftBox1 =[];
for(let i=0; i < 12;i++){
  leftBox1.push("")
}
const leftBox3 =[];
for(let i=0; i < 8;i++){
  leftBox3.push("")
}
const rightBox1 =[];
for(let i=0; i <66;i++){
  rightBox1.push("")
}
const rightBox2 =[];
for(let i=0; i <44;i++){
  rightBox2.push("")
}

const [item2, setItem2] = useState("");

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
  {
    item:"prd11"
  },
  {
    item:"prd12"
  },
  {
    item:"prd13"
  },
  {
    item:"prd14"
  },
  {
    item:"prd15"
  },
  {
    item:"prd16"
  },
  {
    item:"prd17"
  },
  {
    item:"prd18"
  },
  {
    item:"prd19"
  },
  {
    item:"prd20"
  },
  {
    item:"prd21"
  },
  {
    item:"prd22"
  },
  {
    item:"prd23"
  },
  {
    item:"prd24"
  },
  {
    item:"prd25"
  },
  {
    item:"prd26"
  },
  {
    item:"prd27"
  },
  {
    item:"prd28"
  },
  {
    item:"prd29"
  },
  {
    item:"prd30"
  },
];
const item2Click = (e) =>{
  setItem2(item2 => e.target.innerText);
}

const box1Click = (a) =>{
  const box1Content = document.getElementsByClassName('box1Content');
  const box1 = box1Content[a]

  if(box1.innerText==""){
    box1.append(item2)
  }else{
    box1.innerText=""
  }
}

const box2Click = (a) => {
  const box2 = document.getElementById('headerBox2');
  const box2Content = box2.children[a]

  if(box2Content.innerText==""){
    box2Content.append(item2)
  }else{
    box2Content.innerText=""
  }
}

const leftBox1Click = (a) =>{
  const leftBox1 = document.getElementById("leftBox1");
  const leftBox1Con = leftBox1.children[a];
  console.log(leftBox1Con);

  if(leftBox1Con.innerText==""){
    leftBox1Con.append(item2)
  }else{
    leftBox1Con.innerText=""
  }
}

const leftBox2Click = (a) =>{
  const leftBox2 = document.getElementById("leftBox2");
  const leftBox2Con = leftBox2.children[a];

  if(leftBox2Con.innerText==""){
    leftBox2Con.append(item2)
  }else{
    leftBox2Con.innerText=""
  }
}
const leftBox3Click = (a) =>{
  const leftBox3 = document.getElementById("leftBox3");
  const leftBox3Con = leftBox3.children[a];

  if(leftBox3Con.innerText==""){
    leftBox3Con.append(item2)
  }else{
    leftBox3Con.innerText=""
  }
}

const rightBox1Click = (a) =>{
  const rightBox1 = document.getElementsByClassName("boxContent");
  const rightBox1Con = rightBox1[a];

  if(rightBox1Con.innerText==""){
    rightBox1Con.append(item2)
  }else{
    rightBox1Con.innerText=""
  }
}

const rightBox2Click = (a) =>{
  const rightBox2 = document.getElementById("rightBox2");
  const rightBox2Con = rightBox2.children[a];

  if(rightBox2Con.innerText==""){
    rightBox2Con.append(item2)
  }else{
    rightBox2Con.innerText=""
  }
}




const footerClick = (a) =>{
  const footerBox = document.getElementById('footerBox');
  console.log(footerBox.children[a])
  const footerContent = footerBox.children[a]

  if(footerContent.innerText==""){
    footerContent.append(item2)
  }else{
    footerContent.innerText=""
  }
}


  return (
    <div className='container'>
      <div className='header'>
        <div className="headerBox">
          <div className="headerBox1">
            {headerBox1.map((content,index)=>(
              <div className="box1Content" key={index} onClick={()=>box1Click(index)}>
                {content}
              </div>
            ))}
          </div>

          <div id="headerBox2">
            {headerBox2.map((content,index)=>(
              <div className="box1Content" key={index} onClick={()=>box2Click(index)}>
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='asideLeft'>
        <div className="asideLeftBox">
          <div id="leftBox1">
          {leftBox1.map((content,index)=>(
              <div className="box1Content" key={index} onClick={()=>leftBox1Click(index)}>
                {content}
              </div>
            ))}
          </div>
          <div id="leftBox2">
          {leftBox1.map((content,index)=>(
              <div className="box1Content" key={index} onClick={()=>leftBox2Click(index)}>
                {content}
              </div>
            ))}
          </div>
          <div id="leftBox3">
          {leftBox3.map((content,index)=>(
              <div className="box1Content" key={index} onClick={()=>leftBox3Click(index)}>
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='asideRight'>
        <div className="asideRightBox">
          <div className="rightBox1">
           {rightBox1.map((content,index)=>(
              <div className="boxContent" key={index} onClick={()=>rightBox1Click(index)}>
                {content}
              </div>
            ))}
          </div>
          <div id="rightBox2">
          {rightBox2.map((content,index)=>(
              <div className="boxContent" key={index} onClick={()=>rightBox2Click(index)}>
                {content}
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="footer">
        <div id="footerBox">
           {footerBox.map((content,index)=>(
              <div className="box1Content" key={index} onClick={()=>footerClick(index)}>
                {content}
              </div>
            ))}
        </div>
      </div>


      <div className="list2">
        <div className="items2">
          {items.map((item,index)=>(
            <div className="item2" key={index} onClick={item2Click}>
              {item.item}
            </div>
          ))}
        </div>
      </div>



    </div>
)
}

export default Test2
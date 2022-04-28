import React from 'react'
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
  return (
    <div className='container'>
      <div className='header'>
        <div className="headerBox">
          <div className="headerBox1">
            {headerBox1.map((content,index)=>(
              <div className="box1Content" key={index}>
                {content}
              </div>
            ))}
          </div>

          <div className="headerBox2">
            {headerBox2.map((content,index)=>(
              <div className="box1Content" key={index}>
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='asideLeft'>
        <div className="asideLeftBox">
          <div className="leftBox1">
          {leftBox1.map((content,index)=>(
              <div className="box1Content" key={index}>
                {content}
              </div>
            ))}
          </div>
          <div className="leftBox2">
          {leftBox1.map((content,index)=>(
              <div className="box1Content" key={index}>
                {content}
              </div>
            ))}
          </div>
          <div className="leftBox3">
          {leftBox3.map((content,index)=>(
              <div className="box1Content" key={index}>
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
              <div className="boxContent" key={index}>
                {content}
              </div>
            ))}
          </div>
          <div className="rightBox2">
          {rightBox2.map((content,index)=>(
              <div className="boxContent" key={index}>
                {content}
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerBox">
           {footerBox.map((content,index)=>(
              <div className="box1Content" key={index}>
                {content}
              </div>
            ))}
        </div>
      </div>
    </div>
)
}

export default Test2
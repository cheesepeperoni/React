import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Api.css'

const Api = () => {
    const[result,setResult] =useState([]);
    const[id,setId] = useState("");
    const[name,setName] = useState("");
    const[pw, setPw] = useState("");

    // 조회
    const api =()=> {
    axios
    .get("http://localhost:20001/UserInfo")
    .then((response) => {
      if (response.data.Result === "Success") {
        const res = response.data.Msg;
        setResult(result=>res);
      }
    })
    .catch((err) => console.log(err))};

    // 등록
    const apiInsert = () => {
        axios
        .post("http://localhost:20001/add",{
            name:name,
            pw:pw
        })
        .then((response)=>{
            if(response.data.Result==="Success"){
                api();
            }
        }).catch(error => console.log(error))
    }
    
    // 삭제
    const apiDelete = () =>{
        axios
        .post("http://localhost:20001/userDelete",{
            id:id
        })
        .then((response)=>{
            if(response.data.Result === 'Success'){
                api();
            }
        }).catch(error => console.log(error))


    }

    // 수정
    const apiModify = () =>{
        axios
        .post("http://localhost:20001/userUpdate",{
            name:name,
            id:id
        })
        .then((response)=>{
            if(response.data.Result==='Success'){
                api();
            }
        }).catch(error => console.log(error))
    }




    const idInput = (e) =>{
        setId(id=>e.target.value)
    }
    const nameInput=(e)=>{
        setName(name=>e.target.value)
        console.log(name);
    }
    const pwInput = (e) =>{
        setPw(pw=>e.target.value)
    }

useEffect(()=>{
    api();
},[])





  return (
    <div>
        <div className="submitInput">
            <p>아이디: <input type="text" onChange={idInput}></input></p>
             <p>이름: <input type="text" onChange={nameInput} className='submitName'></input></p>
             <p>비밀번호: <input type="text"  onChange={pwInput} className='submitPw'></input></p>
            <div className="button">
                <div className='btn' onClick={apiInsert}>등록</div>
                <div className='btn' onClick={apiModify}>수정</div>
                <div className='btn'onClick={apiDelete}>삭제</div>
            </div>
        </div>


   
        {result.map((r)=>
            <div>
               아이디: {r.id}
               이름: {r.userName}
               비밀번호:{r.password}
            </div>
        )}
    </div>
  )
}

export default Api
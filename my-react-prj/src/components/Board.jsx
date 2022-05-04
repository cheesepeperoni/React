import React from 'react'
import './Board.css'

const Board = () => {
  return (
    <div className="bContainer">
      <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>글작성</th>
           <th>글쓴이</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>첫 글</td>
           <td>피비</td>
         </tr>
       </tbody>
      </table>

      <div className="button">
        등록하기
      </div>
    </div>
  )
}

export default Board
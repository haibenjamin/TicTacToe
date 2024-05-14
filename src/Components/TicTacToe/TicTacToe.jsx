import React,{ useState,useRef } from 'react'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import "./TicTacToe.css"

let data=["","","","","","","","",""];

export const TicTacToe = () => {
  let [count,setCount]=useState(0); //count =0 , setCount updates
let [lock,setLock]=useState(false); // lock = false , setlock updates
let titleRef = useRef(null);
let [mpMode,setMultiMode] = useState(false);
const [activeButton, setActiveButton] = useState("p1");
let box0 =useRef(null);
let box1 =useRef(null);
let box2 =useRef(null);
let box3 =useRef(null);
let box4 =useRef(null);
let box5 =useRef(null);
let box6 =useRef(null);
let box7 =useRef(null);
let box8 =useRef(null);
let box_array=[box0,box1,box2,box3,box4,box5,box6,box7,box8];
let comMove;

  const toggle=(e,num)=>{
 
  if(mpMode)
    twoPlayerMode(e,num);
  else
    onePlayerMode(e,num);
  checkWin();
  if(count>=9)
      {
        titleRef.current.innerHTML=`Tie`
      }
   

  }
  const onePlayerMode=(e,num)=>{
    if(lock){
      return 0;
    }else if(e.target.innerHTML===` `){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num]="x";
      setCount(++count);
  
    
   if(checkWin()||count>=9)
    return 0;
        comMove = findBestMove(data);
        box_array[comMove].current.innerHTML = `<img src='${circle_icon}'>`;
        data[comMove]="o";
        setCount(++count);
}
  }
  
  const findBestMove=(data)=>{
    const findMove=(data)=>{
      let i=0;
      while(data[i]!==""&&i<9)
        i++;
      if(i<9)
        return i;
return 0;
      }
    
    let win = possibleWin(data);
    let block = possibleBlock(data);
    let mid = middle(data);
    let opt = optional(data);
    if(win!==-1)
      {
        return win;
      }
      else if(block!==-1){
        return block
            }
    else if(mid!==-1)
      {
        return mid;
      }
  else if(opt!==-1)
  return opt;
return findMove(data);
  }
  const possibleWin=(data)=>{

    if(data[0]==="o" && data[1]==="o" && data[2]==="")
      return 2;
    else if(data[1]==="o" && data[2]==="o" && data[0]==="")
      return 0;
    else if(data[0]==="o" && data[2]==="o" && data[1]==="")
      return 1;

    else if(data[3]==="o" && data[4]==="o" && data[5]==="")
      return 5;
    else if(data[3]==="o" && data[5]==="o" && data[4]==="")
      return 4;
    else if(data[4]==="o" && data[5]==="o" && data[3]==="")
      return 3;

    else if(data[6]==="o" && data[7]==="o" && data[8]==="")
      return 8;
    else if(data[6]==="o" && data[8]==="o" && data[7]==="")
      return 7;
    else if(data[7]==="o" && data[8]==="o" && data[6]==="")
      return 6;
    if(data[0]==="o" && data[3]==="o" && data[6]==="")
      return 6;
    else if(data[0]==="o" && data[6]==="o" && data[3]==="")
      return 3;
    else if(data[3]==="o" && data[6]==="o" && data[0]==="")
      return 0;
    if(data[1]==="o" && data[4]==="o" && data[7]==="")
      return 7;
    else if(data[1]==="o" && data[7]==="o" && data[4]==="")
      return 4;
    else if(data[4]==="o" && data[7]==="o" && data[1]==="")
      return 1;
    if(data[2]==="o" && data[5]==="o" && data[8]==="")
      return 8;
    else if(data[2]==="o" && data[8]==="o" && data[5]==="")
      return 5;
    else if(data[5]==="o" && data[8]==="o" && data[2]==="")
      return 2;

    if(data[0]==="o" && data[4]==="o" && data[8]==="")
      return 8;
    else if(data[0]==="o" && data[8]==="o" && data[4]==="")
      return 4;
    else if(data[4]==="o" && data[8]==="o" && data[0]==="")
      return 0;

    else if(data[2]==="o" && data[4]==="o" && data[6]==="")
      return 6;
    else if(data[2]==="o" && data[6]==="o" && data[4]==="")
      return 4;
    else if(data[4]==="o" && data[6]==="o" && data[2]==="")
      return 2;
    return -1;

  }
  const possibleBlock=(data)=>{
    if(data[2]==="x" && data[1]==="x" && data[0]==="")
      return 0;
    else if(data[0]==="x" && data[2]==="x" && data[1]==="")
      return 1;
    else if(data[0]==="x" && data[1]==="x" && data[2]==="")
      return 2;

    else if(data[3]==="x" && data[4]==="x" && data[5]==="")
      return 5;
    else if(data[3]==="x" && data[5]==="x" && data[4]==="")
      return 4;
    else if(data[4]==="x" && data[5]==="x" && data[3]==="")
      return 3;

    else if(data[6]==="x" && data[7]==="x" && data[8]==="")
      return 8;
    else if(data[6]==="x" && data[8]==="x" && data[7]==="")
      return 7;
    else if(data[7]==="x" && data[8]==="x" && data[6]==="")
      return 6;

    if(data[0]==="x" && data[4]==="x" && data[8]==="")
      return 8;
    else if(data[0]==="x" && data[8]==="x" && data[4]==="")
      return 4;
    else if(data[4]==="x" && data[8]==="x" && data[0]==="")
      return 0;
    if(data[0]==="x" && data[3]==="x" && data[6]==="")
      return 6;
    else if(data[0]==="x" && data[6]==="x" && data[3]==="")
      return 3;
    else if(data[3]==="x" && data[6]==="x" && data[0]==="")
      return 0;
    if(data[1]==="x" && data[4]==="x" && data[7]==="")
      return 7;
    else if(data[1]==="x" && data[7]==="x" && data[4]==="")
      return 4;
    else if(data[4]==="x" && data[7]==="x" && data[1]==="")
      return 1;
    if(data[2]==="x" && data[5]==="x" && data[8]==="")
      return 8;
    else if(data[2]==="x" && data[8]==="x" && data[5]==="")
      return 5;
    else if(data[5]==="x" && data[8]==="x" && data[2]==="")
      return 2;

    else if(data[2]==="x" && data[4]==="x" && data[6]==="")
      return 6;
    else if(data[2]==="x" && data[6]==="x" && data[4]==="")
      return 4;
    else if(data[4]==="x" && data[6]==="x" && data[2]==="")
      return 2;
    return -1;
    
  }
  const middle=(data)=>{
    if(data[4]==="")
      return 4;
    else
    return -1;
    
  }
  const optional=(data)=>{
    let i=0;
    while(i<9){
      if(data[i]==="o")
        return neighbors(data,i);
      i++;
    }
    return -1;
    
  }
  const neighbors=(data,i)=>{
  switch(i){
    case 0:
      if(data[1]==="")
        return 1;
      else if(data[2]==="")
        return 2;
      else if(data[3]==="")
        return 3;
      else if(data[6]==="")
        return 6;
      else if(data[4]==="")
        return 4;
      else if(data[8]==="")
        return 8;
      break;
    case 1:
        if(data[0]==="")
          return 0;
        else if(data[2]==="")
          return 2;
        else if(data[4]==="")
          return 4;
        else if(data[7]==="")
          return 7;
      
        break;
    case 2:
          if(data[1]==="")
            return 1;
          else if(data[4]==="")
            return 5;
          else if(data[5]==="")
            return 5;
          else  if(data[0]==="")
            return 0;
          else if(data[6]==="")
            return 6;
          else if(data[8]==="")
            return 8;
        
          break;
    case 3:
            if(data[0]==="")
              return 0;
            else if(data[4]==="")
              return 4;
            else if(data[6]==="")
              return 6;
            else if(data[5]==="")
              return 5;
            break;
    case 4:
              if(data[1]==="")
                return 1;
              else if(data[2]==="")
                return 2;
              else if(data[3]==="")
                return 3;
              else if(data[6]==="")
                return 6;
              else if(data[7]==="")
                return 7;
              else if(data[8]==="")
                return 8;
              else if(data[0]==="")
                return 0;
              else if(data[5]==="")
                return 5;

            
              break;
    case 5:
                if(data[2]==="")
                  return 2;
                else if(data[3]==="")
                  return 3;
                else if(data[4]==="")
                  return 4;
                else if(data[8]==="")
                  return 8;
              
                break;
    case 6:
                  if(data[7]==="")
                    return 7;
                  else if(data[2]==="")
                    return 2;
                  else if(data[3]==="")
                    return 3;
                  else if(data[4]==="")
                    return 4;
                  else if(data[8]==="")
                    return 8;
                  else if(data[0]==="")
                    return 0;

                
                  break;
    case 7:
                    if(data[1]==="")
                      return 1;
            
                    else if(data[6]==="")
                      return 6;
                    else if(data[4]==="")
                      return 4;
                    else if(data[8]==="")
                      return 8;
          
                  
                    break;
    case 8:
                      if(data[7] === "")
                        return 7;
                      else if(data[2] === "")
                        return 2;
                      else if(data[6] === "")
                        return 6;
                      else if(data[4] === "")
                        return 4;
                      else if(data[0] === "")
                        return 0;
                      else if(data[5] === "")
                        return 5;
                      break;
    default:return -1;
                  }
                }


  
  const twoPlayerMode=(e,num)=>{
    if(lock){
      return 0;
    }
    else if(count%2===0){ // checks for value and type
      if(e.target.innerHTML===` `){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num]="x";
      setCount(++count);
    }
      
    }else{
      if(e.target.innerHTML===` `){
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num]="o";
      setCount(++count);
      }
    }

  }
  const checkWin = ()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){ //first col
      return(won(data[2]));

    }
    else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){ //second col
      return(won(data[5]));
    }
    else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){ //third col
      return(won(data[8]));
    }
    else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){ //first row
      return(won(data[6]));
    }
    else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){ // second row
      return(won(data[7]));
    }
    else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){ //third row
      return(won(data[8]));
    }
    else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){ //main diagonal
     return( won(data[8]));
    }
    else if(data[6]===data[4]&&data[4]===data[2]&&data[2]!==""){ //secondery diagonal
      return(won(data[2]));
    }
  }
  const won = (winner)=>{
    setLock(true);
    if(winner==="x")
      titleRef.current.innerHTML=`Congratulations  : <img src='${cross_icon}'>  Won`
    else
    titleRef.current.innerHTML=`Congratulations :  <img src='${circle_icon}'>  Won`
  return true;
  }
  const reset = ()=>{
    setLock(false);
    setCount(0);
    data=["","","","","","","","",""];
    titleRef.current.innerHTML='Tic Tac Toe Game In<span>React</span>';
     // eslint-disable-next-line
     box_array.map((e)=>{
      e.current.innerHTML=` `;
     })
  }
  const p1=(e)=>{
setMultiMode(false);
setActiveButton('p1');

  }
  const p2=(e)=>{
    setMultiMode(true);
    setActiveButton('p2');

  }
  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}> Tic Tac Toe Game In <span> React</span> </h1>
      <div className='board'>
      <div className='row1'>
          <div className='boxes'ref={box0} onClick={(e)=>{toggle(e,0)}}> </div>
          <div className='boxes'ref={box1} onClick={(e)=>{toggle(e,1)}}> </div>
          <div className='boxes'ref={box2} onClick={(e)=>{toggle(e,2)}}> </div> 
        </div>
        <div className='row2'>
          <div className='boxes'ref={box3} onClick={(e)=>{toggle(e,3)}}> </div>
          <div className='boxes'ref={box4} onClick={(e)=>{toggle(e,4)}}> </div>
          <div className='boxes'ref={box5} onClick={(e)=>{toggle(e,5)}}> </div> 
        </div>
        <div className='row3'>
          <div className='boxes'ref={box6} onClick={(e)=>{toggle(e,6)}}> </div>
          <div className='boxes'ref={box7} onClick={(e)=>{toggle(e,7)}}> </div>
          <div className='boxes'ref={box8} onClick={(e)=>{toggle(e,8)}}> </div> 
        </div>
      </div>
      <div>
         <button className={activeButton === 'p1' ? 'active' : 'p1'} onClick={p1}>1 Player</button>
         <button className={activeButton === 'p2' ? 'active' : 'p2'} onClick={p2}>2 Players</button>
      </div>
      <div> <button className='reset' onClick={()=>reset()}>Reset</button></div>
      
     

    </div>
  )
}


export default TicTacToe

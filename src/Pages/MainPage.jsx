import { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import Subtitle from "../Components/Subtitle";
import TableHead from "../Components/TableHead.jsx";
import toDoListData from "../Components/toDoListData.js";
import Button from '../Components/Button.jsx';
import ButtonSecond from '../Components/ButtonSecond.jsx';
import InputTask from '../Components/Input.jsx';
// setData((prevtoDoListData)=>prevtoDoListData.filter((remooveData)=>{
//   return remooveData.id!==id;
//  }))
function MainPage() {
  
  const[data,setData]=useState(toDoListData);

  const[displayInput,setdisplayInput]=useState(false);

  const[Status,setchangeStatus]=useState('');

  function deleteTask(id){
    console.log(id);

    //  const removedData=data.filter((remooveData)=>{
    //   return remooveData.id!==id;
    //  })
    //  setData(removedData)

    setData((prevToDoListData)=>prevToDoListData.filter((remooveData)=>{
      return remooveData.id!==id;
    }))
  }
  function display(){
    console.log(data);
  }
  function addTask(){
    setdisplayInput(true);
    
  }

  let inputTask;

  function inputChange(event){
    inputTask=event.target.value;
    console.log(inputTask);
  }

  function adddTask(){
    setData(currentdata=>{
      return [...currentdata,{TaskName:inputTask, Status:"Todo",Edit:"E",Remove:"R"}]
    })
  }

  function changeStatusButton(status){
    if(status==='Todo'){
      status='In-Progress';
      setchangeStatus(status);
    }
    else if(status==='In-Progress'){
      status='Complete';
       setchangeStatus(status);

    }
  }

  return (
    <Page>
      <Header>TODO List Demo App</Header>
      <Subtitle>Do it Now</Subtitle>
      <div style={{alignSelf:'flex-end',padding:'0.4rem'}}>
      <Button buttonType="Add Task" addOperation={addTask}></Button>
      {displayInput && <InputTask type="text" placeHolder="Enter Task"  addInputOperation={inputChange}></InputTask> }
      <button onClick={adddTask}>Ok</button>
      </div>
      <table style={{textAlign:'center'}}>
        <thead>
          <TableHead toDoListData={toDoListData[0]} addOperation={addTask}></TableHead>
        </thead>
        <tbody>
        {data.map((element)=>{
               return <tr>
                    {/* {Object.values(element).map(val=>{
                     return <td>{val}</td>
                    })} */}
                    <td>{element.id}</td>
                    <td>{element.TaskName}</td>
                    <td onClick={()=>changeStatusButton(element.Status)} ><Button buttonType={element.Status} variantType={element.Status}></Button></td>
                    <td onClick={display}><ButtonSecond>{element.Edit}</ButtonSecond></td>
                    <td onClick={()=>deleteTask(element.id)}><ButtonSecond>{element.Remove}</ButtonSecond></td>
                </tr>
            })}
        </tbody>
      </table>

      {/* Doubt */}
      {/* <Table></Table> */}
      
    </Page>
  );
}
export default MainPage;

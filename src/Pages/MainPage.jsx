import { useState } from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import Subtitle from "../Components/Subtitle";
import Table from "../Components/ShowTable.jsx";
import TableHead from "../Components/TableHead.jsx";
import toDoListData from "../Components/toDoListData.js";
import Button from '../Components/Button.jsx';
import ButtonSecond from '../Components/ButtonSecond.jsx';
// setData((prevtoDoListData)=>prevtoDoListData.filter((remooveData)=>{
//   return remooveData.id!==id;
//  }))
function MainPage() {
  const[data,setData]=useState(toDoListData);

  function deleteTask(id){
    console.log(id);

    //  const removedData=data.filter((remooveData)=>{
    //   return remooveData.id!==id;
    //  })
    //  setData(removedData)

    setData((prevtoDoListData)=>prevtoDoListData.filter((remooveData)=>{
      return remooveData.id!==id;
    }))
  }
  function display(){
    console.log(data);
  }
  function addTask(){
    
  }
  return (
    <Page>
      <Header>TODO List Demo App</Header>
      <Subtitle>Do it Now</Subtitle>
      <div style={{alignSelf:'flex-end',padding:'0.4rem'}}>
      <Button buttonType="Add Task"></Button>
      </div>
      <table style={{textAlign:'center'}}>
        <thead>
          <TableHead toDoListData={toDoListData[0]} addOperation={addTask}></TableHead>
        </thead>
        <tbody>
        {data.map((element)=>{
               return <tr>
                    <td>{element.id}</td>
                    <td>{element.TaskName}</td>
                    <td><Button buttonType={element.Status} variantType={element.Status}></Button></td>
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

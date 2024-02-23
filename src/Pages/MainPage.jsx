import { useState } from "react";

import Header from "../Components/Header";
import Page from "../Components/Page";
import Subtitle from "../Components/Subtitle";
import TableHead from "../Components/TableHead.jsx";
import toDoListData from "../Components/toDoListData.js";
import Button from '../Components/Button.jsx';
import ButtomSmallSquare from '../Components/ButtonSmallSquare.jsx';
import InputTask from '../Components/Input.jsx';

import mainPageStyle from '../Pages/MainPage.module.css';

function MainPage() {
  
  const[data,setData]=useState(toDoListData);

  const[displayInput,setdisplayInput]=useState(false);
  
  const[inputTask,setinputTask]=useState('');

  const[editButtonStatus,setchangeEditButtonStatus]=useState(false);

  const[editedTaskId,setEditedTaskId]=useState();
  

  function deleteTask(id){
    setData((prevToDoListData)=>prevToDoListData.filter((remooveData)=>{
      return remooveData.id!==id;
    }))
  }



  function showInputTaskBar(){
    setdisplayInput(true);  
  }





// To Change Button Based on Status

  function changeStatusOnClick(buttonStat,id){    
  if(buttonStat==='Todo'){
    setData((cureentDta)=>{
      const index= cureentDta.findIndex((element)=>{
            return element.id===id;
      });
      const tempArray=[...cureentDta];
      tempArray[index].Status='In-Progress';
        return tempArray;
    })
   }
  else if(buttonStat==='In-Progress'){
    setData((cureentDta)=>{
      const index= cureentDta.findIndex((element)=>{
            return element.id===id;
      });
      const tempArray=[...cureentDta];
      tempArray[index].Status='Completed';
        return tempArray;
    })
    }
  }

  function inputChange(event){
      setinputTask(event.target.value);
   
  }
  
  function adddTask(){
    if(!editButtonStatus){
      setData(currentdata=>{
        return [...currentdata,{TaskName:inputTask, Status:"Todo",Edit:"E",Remove:"R"}]
      })
      setinputTask('');
    }
    else{
      setData((currentData)=>{
        const index=currentData.findIndex((element)=>{
         return  element.id===editedTaskId;
        })

        const modifiedArray=[...currentData];
        modifiedArray[index].TaskName=inputTask;
         return modifiedArray;
      })
      setchangeEditButtonStatus(false);
      setinputTask('');
    }
   
  }


  function editData(id){
    setchangeEditButtonStatus(true);
    setEditedTaskId(id);   
    setdisplayInput(true);
    const value= data.find((item)=>{
        return item.id===id;
     })
    setinputTask(value.TaskName)
  }

  return (
    <Page>
      <Header>TODO List Demo App</Header>
      <Subtitle>Do it Now</Subtitle>
      <div className={mainPageStyle.inputBox} >
      <Button buttonType="Add Task" buttonHandler={showInputTaskBar} variantType="primary"></Button>
      {displayInput && <div className={mainPageStyle.searchBox}>
        <InputTask type="text" placeHolder="Enter Task" resetvalue={inputTask}  addInputHanlder={inputChange} ></InputTask>
        <ButtomSmallSquare  className={mainPageStyle.searchBoxButton} addClickHandler={adddTask}>Ok</ButtomSmallSquare>
        </div>}  
      </div>
      <table className={mainPageStyle.tableElement}>
        <thead>
          <TableHead toDoListData={toDoListData[0]}></TableHead>
        </thead>
        <tbody>
         {data.map((element)=>{
         return <tr key={element.id}> 
          <td>{element.id}</td>
          <td>{element.TaskName}</td>
            <td ><Button  buttonType={element.Status} varaiantType={element.Status==='Todo'?'black':element.Status==='In-Progress'?'alert':'success'} buttonHandler={()=>changeStatusOnClick(element.Status,element.id)} ></Button></td>          
          <td ><ButtomSmallSquare varaiantType="alert" addClickHandler={()=>editData(element.id)} >Edit</ButtomSmallSquare></td>
          <td onClick={()=>deleteTask(element.id)}><ButtomSmallSquare>Remove</ButtomSmallSquare></td>
            </tr>
          })}
        </tbody>
      </table>    
    </Page>
  );
}
export default MainPage;

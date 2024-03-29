import { useState } from "react";

import Header from "../components/Header.jsx";
import Page from "../components/Page.jsx";
import Subtitle from "../components/Subtitle.jsx";
import TableHead from "../components/TableHead.jsx";
import toDoListData from "../components/toDoListData.js";
import Button from '../components/Button.jsx';
import ButtomSmallSquare from '../components/ButtonSmallSquare.jsx';
import InputTask from '../components/Input.jsx';

import mainPageStyle from './MainPage.module.css';

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
        return sortByStatus(tempArray);
    })
   }
  else if(buttonStat==='In-Progress'){
    setData((cureentDta)=>{
      const index= cureentDta.findIndex((element)=>{
            return element.id===id;
      });
      const tempArray=[...cureentDta];
      tempArray[index].Status='Completed';
      
        return sortByStatus(tempArray);
    })
    }
  }

  function inputChange(event){
      setinputTask(event.target.value);
   
  }

  const sortByStatus = (array) => {
    const statusOrder = ["Todo", "In-Progress", "Completed"];
    const sortedData = [...array].sort(
      (a, b) => statusOrder.indexOf(a.Status) - statusOrder.indexOf(b.Status)
    );
    return sortedData;
  };
  
  function adddTask(){
    if(!editButtonStatus){
      setData(currentdata=>{
        let datas= [...currentdata,{TaskName:inputTask, Status:"Todo",Edit:"E",Remove:"R"}]
      return sortByStatus(datas);
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
            <td ><Button  buttonType={element.Status} variantType={element.Status==='Todo'?'black':element.Status==='In-Progress'?'alert':'success'} buttonHandler={()=>changeStatusOnClick(element.Status,element.id)} ></Button></td>          
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

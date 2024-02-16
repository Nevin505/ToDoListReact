import toDoListData from './toDoListData.js'
import TableStyle from './ShowTable.module.css'
import Button from './Button.jsx';
import ButtonSecond from './ButtonSecond.jsx';
import TableHead from './TableHead.jsx';

function ShowTable({firstHeading,secondHeading,thirdHeading,fourthHeading,fifthHeading}){

    return (
        <table className={TableStyle.table}>
            <thead className={TableStyle.tableHead}>
                {/* <tr className={TableStyle.headingRow}>
                    {Object.keys(toDoListData[0]).map((tableHeadingData)=>{
                        return <th>{tableHeadingData}</th>
                    })}
                </tr> */}
                <TableHead toDoListData={toDoListData[0]}></TableHead>
            </thead>
            <tbody>
            {toDoListData.map((element)=>{
               return <tr>
                    <td>{element.id}</td>
                    <td>{element.TaskName}</td>
                    <td><Button buttonType={element.Status} variantType={element.Status}></Button></td>
                    <td><ButtonSecond>{element.Edit}</ButtonSecond></td>
                    <td ><ButtonSecond>{element.Remove}</ButtonSecond></td>
                </tr>
            })}
            
            </tbody>
        </table>
    );
}
export default ShowTable;
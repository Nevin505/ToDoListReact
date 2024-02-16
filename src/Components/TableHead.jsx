import TableHeadStyles from './TableHead.module.css'

function TableHead({toDoListData }) {
  return (
    <tr className={TableHeadStyles.headingRow}>
      {Object.keys(toDoListData).map((tableHeadingData) => {
        return <th>{tableHeadingData}</th>;
      })}
    </tr>
  );
}
export default TableHead;

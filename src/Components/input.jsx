import InputTaskStyle from './Input.module.css'
function InputTask({inputType,placeHolder,addInputOperation}){
    return(
        <input type={inputType} placeholder={placeHolder} className={InputTaskStyle.inputBox} onChange={addInputOperation}/>
    );
}
export default InputTask;
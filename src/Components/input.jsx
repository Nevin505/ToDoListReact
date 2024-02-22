import InputTaskStyle from './Input.module.css'
function InputTask({inputType,placeHolder,addInputHanlder,resetvalue}){
    return(
        <input type={inputType} placeholder={placeHolder} value={resetvalue} className={InputTaskStyle.inputBox} onChange={addInputHanlder}/>
    );
}
export default InputTask;
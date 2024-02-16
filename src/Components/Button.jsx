import ButtonTypeStyle from './Button.module.css'

function Button({buttonType,variantType,addOperation}){
    let buttonStyles;
    if(variantType==='Todo'){
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.Todo;
    }
    else if(variantType==='In-Progress')
    {
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.InProgress;
    }
    else if(variantType==='Complete'){
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.Complete;
    }
    else {
        buttonStyles=ButtonTypeStyle.button
    }
    return (
        <button className={buttonStyles} onClick={addOperation}>{buttonType}</button>
    );
}
export default Button;
import ButtonTypeStyle from './Button.module.css'

function Button({buttonType,variantType,buttonHandler}){
    let buttonStyles;
    if(variantType==='black'){
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.black;
    }
    else if(variantType==='alert')
    {
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.yellow;
    }
    else if(variantType==='success'){
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.success;
    }
    else if(variantType==='primary'){
        buttonStyles=ButtonTypeStyle.button+" "+ ButtonTypeStyle.primary;
    }
    else {
        buttonStyles=ButtonTypeStyle.button
    }
    return (
        <button className={buttonStyles} onClick={buttonHandler}>{buttonType}</button>
    );
}
export default Button;
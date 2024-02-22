import buttonSecondStyles from './ButtonSecond.module.css'
function ButtomSmallSquare({children,varaiantType,addClickHandler}){
    let buttonStyles=buttonSecondStyles.button;
    if(varaiantType==='alert'){
        buttonStyles=buttonStyles+" "+buttonSecondStyles.alert;
    }
    else{

    }
    return(
        <button className={buttonStyles}  onClick={addClickHandler}>{children}</button>
    );
}

export default ButtomSmallSquare;
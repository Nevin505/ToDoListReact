import buttonSecondStyles from './ButtonSecond.module.css'
function ButtonSecond({children}){
    return(
        <button className={buttonSecondStyles.button}>{children}</button>
    );
}

export default ButtonSecond;
import PageStyle from "./Page.module.css";

function Page({children}){
    return (
        <div className={PageStyle.page}>{children}</div>
    );
}
export default Page;
import { HiOutlineCloudUpload } from "react-icons/hi";

function card({className, children ,icon}) {
    const styles = {
        backgroundColor: '#3F75FE',
        width: 24, 
        height: 24, 
        color: '#FFFFFF'
    }
    return (
        <div className={className}>
            <HiOutlineCloudUpload className="card-icon"/>
            {children}
        </div>
    )
}

export default card;
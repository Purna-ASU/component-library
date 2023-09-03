import { HiOutlineCloudUpload } from "react-icons/hi";
import { cardContext } from "../../App";
import { useContext } from "react";

function card({className, children}) {
    const {hover, mouseOver} = useContext(cardContext)
   
    const styles = {
        transition: "box-shadow 0.3s ease-in-out",
      };

      if (hover) {
        styles.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }

    return (
        <div className={className} onMouseEnter = {mouseOver} style={styles}>
            <HiOutlineCloudUpload className="card-icon"/>
            {children}
        </div>
    )
}

export default card;
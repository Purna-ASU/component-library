import { useState } from "react";

function useToggle() {
    const [on, setOn] = useState(false)
    const [hover, setHover] = useState(false)

    const toggle = () => {
        setOn((prevState) => !prevState);
      };
    
    const mouseOver = () => {
        setHover((prevState) => !prevState)
    }

    return [on, toggle, hover, mouseOver]
}

export default useToggle
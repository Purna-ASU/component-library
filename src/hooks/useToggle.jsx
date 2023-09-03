import { useState } from "react";

function useToggle() {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(prevState => !prevState)
    }

    return [on, toggle]
}

export default useToggle
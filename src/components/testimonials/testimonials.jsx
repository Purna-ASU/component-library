import { useContext } from "react";
import { TestimonialContext } from "../../App";


function testimonials({ children }) {
    const {picOpen} = useContext(TestimonialContext)
    return (
        <div onClick={() => picOpen()}>
            {children}
        </div>
    )
}

export default testimonials;


function testimonials({ children, clickHandler }) {
    return (
        <div onClick={clickHandler}>
            {children}
        </div>
    )
}

export default testimonials;

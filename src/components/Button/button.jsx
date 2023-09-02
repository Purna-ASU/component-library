import classnames from "classnames"


function button({shape, color, children}) {

    let shapeClass = shape && `button-${shape}`
    let colorClass = color && `button-${color}`
    const allClassNames = classnames (shapeClass, colorClass)

    return (
        <button className={allClassNames}>
            {children}
        </button>
    )
}

export default button;
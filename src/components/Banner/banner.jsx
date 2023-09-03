import classnames from "classnames"
import useToggle from "../../hooks/useToggle";

function banner({children, status, text, clickHandler, ...rest}) {

    const [open, toggleOpen] = useToggle()
    const bannerClass = "banner";
    const statusClass = status && `banner-${status}`;
    const allClassNames = classnames(bannerClass, statusClass);

    return (
        <div className={allClassNames} onClick={clickHandler}>
            {children}
        </div>
    )
}

export default banner;
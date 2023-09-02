import classnames from "classnames"

function banner({children, status, text, clickHandler, ...rest}) {

    const bannerClass = "banner";
    const statusClass = status && `banner-${status}`;
    // const textClass = text && ``;
    const allClassNames = classnames(bannerClass, statusClass);

    return (
        <div className={allClassNames} onClick={clickHandler}>
            {children}
        </div>
    )
}

export default banner;
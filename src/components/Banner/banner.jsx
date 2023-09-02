import classnames from "classnames"

function banner({children, status, text, clickHandler, ...rest}) {

    const bannerClass = "banner";
    const statusClass = status && `banner-${status}`;
    const textClass = text && `banner-${text}`;
    const titleClass = rest && `banner-${status}-title`
    const allClassNames = classnames(bannerClass, statusClass, textClass, titleClass);

    return (
        <div className={allClassNames} onClick={clickHandler}>
            {children}
        </div>
    )
}

export default banner;
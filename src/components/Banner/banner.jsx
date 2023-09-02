import classnames from "classnames"

function banner({children, status, text}) {

    const bannerClass = "banner"
    const statusClass = status && `banner-${status}`;
    const textClass = text && `banner-${text}`
    const allClassNames = classnames(bannerClass, statusClass, textClass)

    return (
        <div className={allClassNames}>
            {children}
        </div>
    )
}

export default banner;
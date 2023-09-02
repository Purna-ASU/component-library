function bannerText({children, status}) {
    return (
        <div className={`banner-${status}-text`}>
            <p>
                {children}
            </p>
        </div>
    )
}

export default bannerText;
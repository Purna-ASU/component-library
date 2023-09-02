function bannerTitle ({children, status}) {
    
    return(
        <div className={`banner-${status}-title`}>
            {children}
        </div>
    )
}

export default bannerTitle
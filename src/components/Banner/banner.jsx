import classnames from "classnames";
import { BannerContext } from "../../App";
import { useContext } from "react";

function Banner({ children, status}) {
  const bannerClass = "banner";
  const statusClass = status && `banner-${status}`;
  const allClassNames = classnames(bannerClass, statusClass);
  const { toggleOpen } = useContext(BannerContext);

  return (
    <div className={allClassNames} onClick={() => toggleOpen()}>
      {children}
    </div>
  );
}

export default Banner;

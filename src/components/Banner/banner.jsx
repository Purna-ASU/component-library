// import classnames from "classnames"
// import { BannerContext } from "../../App";
// import { useContext } from "react";

// function Banner({children, status, clickHandler}) {

//     const bannerClass = "banner";
//     const statusClass = status && `banner-${status}`;
//     const allClassNames = classnames(bannerClass, statusClass);
//     const { open, toggleOpen } = useContext(BannerContext)

//     return (
//         <div className={allClassNames} onClick={() => toggleOpen()}>
//             {children}
//         </div>
//     )
// }

// export default Banner;

import classnames from "classnames";
import { BannerContext } from "../../App";
import { useContext } from "react";

function Banner({ children, status, clickHandler }) {
  const bannerClass = "banner";
  const statusClass = status && `banner-${status}`;
  const allClassNames = classnames(bannerClass, statusClass);
  const { open, toggleOpen } = useContext(BannerContext);

  return (
    <div className={allClassNames} onClick={() => toggleOpen()}>
      {children}
    </div>
  );
}

export default Banner;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Heading = () => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover: true,
  };
  return (
    <div className="w-full  bg-white flex">
      <div className="headd bg-amber-500 py-2 px-6 text-white">শিরনাম</div>
      {
        /* <div className="flex items-center">
        <div className="w-[79rem]  items-center ">
          <Slider {...settings} className="flex gap-6 ">
            <li>
              <Link to="#" className="w-full flex  ">
                i<span className="ml-2 truncate ">এনটিআরসিএ</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="w-fill flex  ">
                i
                <span className="ml-2 truncate">
                  মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
                </span>
              </Link>
            </li>
            <li>
              <Link to="" className="w-fill flex  ">
                i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>{" "}
            <li>
              <Link to="" className="w-fill flex  ">
                i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>{" "}
            <li>
              <Link to="" className="w-fill flex  ">
                i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>{" "}
            <li>
              <Link to="" className="w-fill flex  ">
                i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>{" "}
            <li>
              <Link to="" className="w-fill flex  ">
                i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>{" "}
            <li>
              <Link to="" className="w-fill flex  ">
                i<span className="ml-2 truncate">শিক্ষা মন্ত্রণালয়</span>
              </Link>
            </li>
          </Slider>
        </div>
      </div> */
      }
    </div>
  );
};

export default Heading;

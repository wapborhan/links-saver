import "./style.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-12 col-sm-offset-1 text-center">
                <div className="bg-img">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="content">
                  <h3 className="h1">Page not found!</h3>
                  <p>are you sure you want to be here?</p>
                  <Link to="/" className="link rounded-lg">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;


import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <section className="">
        <div className="flex flex-col items-center">
          <img src='https://i.ibb.co/1RtpCRC/13315300-5203299.jpg' alt="" width={500} />
          <div className="max-w-7xl text-center">

            <p className="text-xl font-bold text-primary mb-8">
              Opps! {error.message}
            </p>
            <Link
              to="/"
              className="btn btn-primary text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;
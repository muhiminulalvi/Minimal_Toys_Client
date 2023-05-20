
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error } = useRouteError();
    return (
        <section className="flex flex-col-reverse items-center justify-center w-3/4 mx-auto">
          <div className='text-center'>
            <h2 className='text-5xl text-primary font-bold py-5'>Looks Like You are in the wrong location</h2>
            <Link
              to="/"
              className="btn btn-primary text-white"
            >
              Back to homepage
            </Link>
          </div>
        <div className="flex flex-col items-center">

          <img src='https://i.ibb.co/1RtpCRC/13315300-5203299.jpg' alt="" width={400} />
          <div className="max-w-7xl text-center">

            <p className="text-xl font-bold text-primary mb-8">
               {error.message}
            </p>
            
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;
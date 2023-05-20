import { Link, useLocation, useNavigate } from 'react-router-dom';
import RegisterBanner from '../../assets/toy123.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {logIn, googleLogIn} = useContext(AuthContext)
    const [error, setError] = useState("")
    const googleAuth = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogIn = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
            setError("")
        })
        .catch(err => {
          console.log(err)
          setError("Insert right email or password")
        })
    }

    const clickGoogle = () =>{
        googleLogIn(googleAuth)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, {replace: true})
          setError("")

        })
        .catch(err => {
          console.log(err.message);
          setError("Please try again.")
        })
      }

  return (
    <>
      <div
        className="hero min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url("https://i.ibb.co/8bBM4kG/pexels-markus-spiske-168866.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-md bg-gradient-to-t from-red-600"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold ">Login</h2>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-7 py-14'>
        <div className='text-center '>
            <img src={RegisterBanner} alt="" className='w-96 h-96 mx-auto'/>
        </div>
        <div className='py-7 px-6 shadow-xl bg-primary rounded-md'>
          <form className=' py-3 px-5 ' onSubmit={handleLogIn}>
            <div className='py-3'>
                <h2 className='text-3xl font-bold text-white text-center'>Please Login!</h2>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-white">Email</span>
              </label>
              <input
              name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-white">Password</span>
              </label>
              <input
              name='password'
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn btn-warning font-bold"/>
            </div>
          </form>
          <div className='py-3 px-5 text-center text-white font-bold space-y-3'>
            <h2>or</h2>
            <button className='btn btn-warning w-full font-bold ' onClick={clickGoogle}>Login with GOOGLE</button>

          </div>
          <div className='py-3 px-5 text-center text-white font-bold'>
            <h1>New to Minimal Toys? <Link to='/register'>Register Now!</Link></h1>
          </div>
          <div>
          <p className="text-white font-bold text-center text-xl">{error}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

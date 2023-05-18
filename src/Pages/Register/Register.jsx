import { Link } from 'react-router-dom';
import RegisterBanner from '../../assets/toy123.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        // create User
        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(err => console.log(err)) 
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
          <form className=' py-3 px-5 ' onSubmit={handleRegistration}>
            <div className='py-3'>
                <h2 className='text-3xl font-bold text-center text-white'>Please Register!</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-white">Name</span>
              </label>
              <input
              name='name'
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
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
                <span className="label-text font-bold text-white">Photo URL</span>
              </label>
              <input
              name='photoURL'
                type="text"
                placeholder="photo url"
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
              <input type="submit" value="Register" className="btn btn-warning font-bold"/>
            </div>
          </form>
          <div className='py-3 px-5 text-center text-white font-bold'>
            <h1>Already have an account? <Link to='/login'>Login Now!</Link></h1>
          </div>
        </div>
      </div>
    </>
    );
};

export default Register;
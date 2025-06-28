import Header from '../Components/Header'
import Footer from '../Components/Footer'



export default function Login() {
  return (
    <div>
      < Header />

      <div id='login-container'>
        <div id='title-login'>
          <h2>LOGIN</h2>
          <h3>GMA Medical Admin Login</h3>
        </div>
        <div id='login-form'>
          {/* TODO apply login form here */}
        </div>
      </div>

      < Footer />
    </div>
  );
}
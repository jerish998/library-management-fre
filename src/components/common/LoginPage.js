import React, {useState} from "react";
import './LoginPage.module.css';


function LoginPage (){
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
    return(
        <>
        <div className="login-container">
            <div className="login-image">
               <img src="./login_image_girl_reading_book.jpg" alt="Logo" className="login-logo" width={250} height={250}/>
            </div>
            <div className="login-form">
                 <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
            </div>
        </div>
        
        </>
    );
}
export default LoginPage;
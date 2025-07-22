'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function Login() {
  return (
    <div>

      <div id='login-container' className="w-full text-center pt-[55px]">

        <div id='title-login' className="bg-gma-gray p-[55px] w-5/6 mx-auto rounded-2xl">

          <h2 className="font-roboto-condensed text-gma-text-white text-[65px] font-bold">LOGIN</h2>

          <h3 className="font-roboto-condensed text-gma-text-white text-[20px]">GMA Medical Admin Login</h3>

        </div>

        <div id='login-form'>
          {/* TODO apply login form here */}
          <Authenticator hideSignUp>
            
          </Authenticator>
        </div>

      </div>

    </div>
  );
}
'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useEffect, useState } from "react";
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from "next/navigation";

import { Amplify } from 'aws-amplify'
import outputs from "@/amplify_outputs.json";
import { Hub } from 'aws-amplify/utils';

Amplify.configure(outputs, { ssr: true })

export default function Login() {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const checkUser = async () => {
    try {
      await getCurrentUser();
      router.push("/Admin");
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {

    checkUser();

    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      if (payload.event === "signedIn") {
        checkUser();
      }
    });

    return () => unsubscribe();
    
  }, [router]);

  return (
    <div>

      <div id='login-container' className="w-full text-center pt-[95px]">

        <div id='title-login' className="bg-gma-gray p-[15px] pb-[55px] mb-[55px] md:p-[95px] md:w-5/6 md:mx-auto md:rounded-2xl">

          <h2 className="font-roboto-condensed text-gma-text-white text-[65px] font-bold">LOGIN</h2>

          <h3 className="font-roboto-condensed text-gma-text-white text-[20px]">GMA Medical Admin Login</h3>

          <Authenticator hideSignUp className='pt-[45px]'/>

        </div>

      </div>

    </div>
  );
}
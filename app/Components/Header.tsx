'use client';
import outputs from "@/amplify_outputs.json";
import { Amplify } from 'aws-amplify'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from "next/navigation";
import { Hub } from 'aws-amplify/utils';
import Image from 'next/image'

Amplify.configure(outputs, { ssr: true })

export default function Header() {

    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuStatus, setMenuStatus] = useState(false);

    const checkUser = async () => {
          try {
            await getCurrentUser();
            setMenuStatus(true);
          } catch {
            setMenuStatus(false);
          }
        };

    useEffect(() => {
        checkUser();
        
        const unsubscribe = Hub.listen("auth", ({ payload }) => {
            if (payload.event === "signedIn" || payload.event === "signedOut") {
                checkUser();
            }
        });

        return () => unsubscribe();

      }, [router]);

      const menuLinks = menuStatus ? ["Products", "Contact", "Admin"] : ["Products", "Contact", "Login"];

    return (
        <nav className='bg-gma-blue relative px-4 py-4 flex justify-between items-center'>

            {/* Logo */}
            <Link href="/">
                <Image
                    src="/Images/GMA-Logo-w-text.jpg"
                    className='w-[100px] md:w-[120px] rounded-full hover:w-[130px]'
                    alt="GMA Logo"
                    width={100}
                    height={100}
                />
            </Link>

            {/* Desktop Nav */}
            <div className='hidden md:flex items-center space-x-12 lg:space-x-24 h-full'>
                {menuLinks.map((text) => (
                    <Link
                        key={text}
                        href={`/${text}`}
                        className='relative font-roboto text-gma-text-white text-[18px] lg:text-[20px] px-2 pb-[4px]
                            after:content-[""] after:absolute after:left-0 after:bottom-[-16px]
                            after:h-[4px] after:w-0 after:bg-white
                            after:transition-all after:duration-300
                            hover:after:w-full font-extrabold'
                    >
                        {text}
                    </Link>
                ))}
            </div>

            {/* Hamburger Icon */}
            <button
                className='md:hidden shrink-0 w-12 h-12 flex items-center justify-center'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <img src="/Images/ICONS/menuIcon.png" alt="Menu Icon" />
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute top-full left-0 w-full bg-gma-blue text-white flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-10 shadow-lg'>
                    {menuLinks.map((text) => (
                        <Link
                            key={text}
                            href={`/${text}`}
                            onClick={() => setMenuOpen(false)}
                            className='text-[18px] font-roboto font-extrabold hover:underline underline-offset-4 decoration-white decoration-2'
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}



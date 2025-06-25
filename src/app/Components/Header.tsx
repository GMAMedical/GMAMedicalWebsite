import Link from 'next/link';


export default function Header() {
    return (
        <nav>
            <Link href="/"> <img src="./Images/GMA-Logo-w-text.jpg" /> </Link>
            <Link href="/Products">Products</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Login">Login</Link>
        </nav>
    );
}
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex justify-center'>
      <div className='text-center content-center'>
        <h2 className='text-5xl font-bold font-roboto m-[55px]'>Page Not Found, Sorry...</h2>
        <Link href="/" className='font-roboto font-bold bg-gma-blue p-[25px] rounded-full hover:bg-blue-700 text-gma-text-white text-[20px]'>Return Home</Link>
      </div>
    </div>
  )
}
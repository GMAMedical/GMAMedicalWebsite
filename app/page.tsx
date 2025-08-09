import Link from 'next/link';
import Image from 'next/image'


export default function Home() {

  


  return (
    <main>

      <div id='banner-top-home' className='relative text-center mt-[45px]'>
        <img src="/Images/blue-cover-2.png" alt="Blue Surgical Background" className='w-full blur-sm' />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
          <h1 className='text-[45px] font-bold font-roboto-condensed text-gma-text-white w-full md:text-[68px] lg:text-[120px]'>GMA MEDICAL</h1>
          <h3 className='mt-2 text-[13px] px-[5px] font-roboto-condensed text-gma-text-white lg:text-[20px]'>
            Quality service backed by quality products by companies the world trust.
          </h3>
        </div>
      </div>


      <div id='our-mission' className='my-[80px] text-center px-4'>
        <h2 className='text-[38px] font-roboto-condensed font-bold text-gma-text-title lg:text-[45px]'>
          Our Mission
        </h2>

        <p className='text-[18px] font-roboto-condensed text-gma-text-p max-w-[900px] mx-auto leading-[35px] lg:leading-[45px] mt-4'>
          GMA Medical is focused on providing new and cost efficient technologies for the Surgical Services market that will improve patient outcomes, improve a facility's processes, and improve the surgeon's ability to perform procedures. Our commitment is to assist our customers to meet their objectives.
        </p>
      </div>


      <div id='manufacturers' className='bg-gma-gray p-[55px] text-center'>
        <h2 className='text-gma-text-white font-roboto-condensed text-[38px] lg:text-[45px]'>MANUFACTURERS</h2>
        <h3 className='text-gma-text-white font-roboto-condensed text-[18px] px-[12px]'>These companies are what makes US happen.</h3>
        <div id='manufacturers-images' className='md:grid md:grid-cols-2 md:grid-rows-2'>

          {/* Could make this a array with names then map into a template and all that but I am not trying to change the filenames again */}

          <div className='flex justify-center md:content-center md:justify-end'>
            <Image
              src="/Images/MANUFACTURES/appliedImage.png" 
              alt="Applied BioLogics Image" 
              className='w-[350px] m-[35px]'
              width={350}
              height={350}
            />
          </div>

          <div className='flex justify-center md:content-center md:justify-start'>
            <Image 
              src="/Images/MANUFACTURES/ICImage.png" 
              alt="IC Medical Image" 
              className='w-[350px] m-[35px]'
              width={350}
              height={350}
            />
          </div>

          <div className='flex justify-center md:content-center md:justify-end'>
            <Image 
              src="/Images/MANUFACTURES/novImage.png" 
              alt="Novus Scientific Image" 
              className='w-[350px] m-[35px]'
              width={350}
              height={350}
            />
          </div>

          <div className='flex justify-center md:content-center md:justify-start'>
            <Image 
              src="/Images/MANUFACTURES/varImage.png" 
              alt="Variamed Image" 
              className='w-[350px] m-[35px]'
              width={350}
              height={350}
            />
          </div>

        </div>
      </div>

      <div id='whats-next' className='text-center p-[85px] flex flex-col'>
        <h2 className='text-[38px] font-bold font-roboto-condensed lg:text-[45px]'>What's Next?</h2>
        <h3 className='text-[18px] font-roboto-condensed text-gma-text-p'>
          Not sure what's next? Browse our wide selection of {<Link href="/Products" className='font-bold border-b-2'>products</Link>}—then reach out! It's that easy.
        </h3>
        <Link 
          href="/Contact"
          className='bg-gma-blue mt-[35px] p-[15px] px-[40px] py-[12px] w-[200px] mx-auto rounded-full text-gma-text-white font-roboto-condensed font-bold text-[25px] hover:bg-blue-700 hover:text-[26px]'
        >
          Contact
        </Link>     
      </div>

      <div id='more-about-us' className='bg-gma-gray mb-[55px] font-roboto-condensed text-gma-text-white'>


        <div id='values' className='flex justify-center pt-[75px]'>
          <div className='flex flex-col w-3xl'>
            <div className='flex flex-row justify-center m-[15px]'>
              <img src="../Images/ICONS/bookIcon.png" alt="Book Icon" className='w-[80px] h-[80px]' />
              <h2 className='text-[38px] md:text-[55px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-[15px] md:mt-[0px]'>OUR VALUES</h2>
            </div>
            <div className='flex justify-center'>
              <hr className='border-5 w-xs md:w-xl'/>
            </div>
            <div className='flex justify-center text-[20px] mt-[15px]'>
              <p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>What makes us... US</p>
            </div>
            <div className='flex justify-center text-center'>
              <div className='text-gma-text-title bg-gma-text-white p-[35px] m-[15px] w-xs md:w-lg border-2 border-black rounded-full text-[15px] md:text-[20px]'>
                <p className='m-[5px]'>Being professional</p>
                <p className='m-[5px]'>Doing everything we do well</p>
                <p className='m-[5px]'>Demonstrating rapid response</p>
              </div>
            </div>
            <div className='flex justify-center text-center'>
              <p className='text-gma-text-title bg-gma-text-white p-[35px] m-[15px] w-sx md:w-lg border-2 border-black rounded-full text-[15px] md:text-[20px]'>Providing exceptional service and continuous support</p>
            </div>
            <div className='flex justify-center text-center'>
              <p className='text-gma-text-title bg-gma-text-white p-[35px] m-[15px] w-sx md:w-lg border-2 border-black rounded-full text-[15px] md:text-[20px]'>Treating people we contact with respect and courtesy</p>
            </div>
          </div>
        </div>


        <div id='exp' className='flex justify-center'>
          <div className='flex flex-col w-3xl'>
            <div className='flex flex-row justify-center content-center m-[15px] mt-[75px]'>
              <img src="../Images/ICONS/directionsIcon.png" alt="Book Icon" className='w-[80px] h-[80px]' />
              <h2 className='text-[38px] md:text-[55px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-[15px] md:mt-[0px] text-nowrap'>OUR EXPERIENCE</h2>
            </div>
            <div className='flex justify-center'>
              <hr className='border-5 w-xs md:w-xl'/>
            </div>
            <div className='flex justify-center text-[20px] mt-[15px]'>
              <p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>A little background about us.</p>
            </div>
            <div className='flex justify-center text-center'>
              <p className='text-gma-text-title bg-gma-text-white p-[65px] md:p-[35px] m-[15px] w-xs md:w-xl border-2 border-black rounded-full text-[15px] md:text-[20px]'>We are based on 15+ years of sales experience with Stryker, Zimmer, Karl Stortz, and Olympus. We have developed strong relationships with the administrations, nurses, and doctors of leading health care providers in Southern Ohio, Indiana and Kentucky.</p>
            </div>
          </div>
        </div>


        <div id='focus' className='flex justify-center pb-[75px]'>
          <div className='flex flex-col w-3xl'>
            <div className='flex flex-row justify-center m-[15px] mt-[75px]'>
              <img src="../Images/ICONS/queryIcon.png" alt="Book Icon" className='w-[80px] h-[80px]' />
              <h2 className='text-[38px] md:text-[55px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-[15px] md:mt-[0px]'>OUR FOCUS</h2>
            </div>
            <div className='flex justify-center'>
              <hr className='border-5 w-xs md:w-xl'/>
            </div>
            <div className='flex justify-center text-[20px] mt-[15px]'>
              <p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>What's our goal?</p>
            </div>
            <div className='flex justify-center text-center'>
              <p className='text-gma-text-title bg-gma-text-white p-[65px] md:p-[35px] m-[15px] w-xs md:w-xl border-2 border-black rounded-full text-[15px] md:text-[20px]'>We are focused on providing cost effective, innovative products and services to the operating room. We work with surgical specialists in  areas such as Cardiovascular, Cardiothoracic, Neuro and Spine, Gynecology, Orthopedics, and Urology, as well as, in General surgery.</p>
            </div>
          </div>
        </div> 


      </div>

    </main>
  );
}

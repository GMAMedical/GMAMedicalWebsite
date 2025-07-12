import Link from 'next/link';

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
        <div id='manufacturers-images'>
          {/* TODO add all static manufacturers images when Jeff sends them */}
        </div>
      </div>

      <div id='whats-next' className='text-center p-[85px] flex flex-col'>
        <h2 className='text-[38px] font-bold font-roboto-condensed lg:text-[45px]'>What's Next?</h2>
        <h3 className='text-[18px] font-roboto-condensed text-gma-text-p'>
          Not sure what's next? Browse our wide selection of products—then reach out! It's that easy.
        </h3>
        <Link 
          href="/Contact"
          className='bg-gma-blue mt-[35px] p-[15px] px-[40px] py-[12px] w-[200px] mx-auto rounded-full text-gma-text-white font-roboto-condensed font-bold text-[25px] hover:bg-blue-700 hover:text-[26px]'
        >
          Contact
        </Link>     
      </div>

      <div id='more-about-us' className='grid lg:grid-rows-3 lg:grid-cols-2 m-[85px] text-gma-text-white font-roboto-condensed'>

        <div id='values' className='text-center px-[10px] lg:border-r-12 border-gma-gray lg:mr-[25px] lg:pl-[31px]'>
          <h2 className='text-gma-text-white text-[45px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>OUR VALUES</h2>
          <h3 className='text-gma-text-white text-[18px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>What makes us... US</h3>
        </div>

        <div id='values-desc' className='grid lg:grid-cols-2 lg:grid-rows-1 justify-center'>
          <div id='values-desc-1' className='bg-gma-gray p-[18px] m-[20px] border-2 border-black [box-shadow:4px_4px_8px_0px_rgba(0,0,0,0.25)]'>
            <ul className='list-disc'>
              <li className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px]'>Providing exceptional service and continuous support</li>
              <li className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px]'>Treating people we contact with respect and courtesy</li>
            </ul>
          </div>

          <div id='values-desc-2' className='bg-gma-gray p-[18px] m-[20px] border-2 border-black [box-shadow:4px_4px_8px_0px_rgba(0,0,0,0.25)]'>
            <ul className='list-disc'>
              <li className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px]'>Being professional</li>
              <li className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px]'>Doing everything we do well</li>
              <li className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px]'>Demonstrating rapid response</li>
            </ul>
          </div>
        </div>

        <div id='exp' className='text-center px-[10px] lg:border-r-12 border-gma-gray lg:mr-[25px] lg:pl-[31px]'>
          <h2 className='text-gma-text-white text-[45px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>OUR EXPERIENCE</h2>
          <h3 className='text-gma-text-white text-[18px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>A little background about us.</h3>
        </div>

        <div id='exp-desc' className='bg-gma-gray p-[18px] m-auto border-2 border-black [box-shadow:4px_4px_8px_0px_rgba(0,0,0,0.25)]'>
          <p className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px] text-center'>
            We are based on 10+ years of sales experience with Stryker, Zimmer, Karl Stortz, and Olympus. We have developed strong relationships with the administrations, nurses, and doctors of leading health care providers in Southern Ohio, Indiana and Kentucky.
          </p>
        </div>

        <div id='focus' className='text-center px-[10px] lg:border-r-12 border-gma-gray lg:mr-[25px] lg:pl-[31px]'>
          <h2 className='text-gma-text-white text-[45px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>OUR FOCUS</h2>
          <h3 className='text-gma-text-white text-[18px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>What's our goal?</h3>
        </div>

        <div id='focus-desc' className='bg-gma-gray p-[18px] m-auto border-2 border-black [box-shadow:4px_4px_8px_0px_rgba(0,0,0,0.25)]'>
          <p className='lg:pb-[12px] lg:pl-[12px] font-bold leading-[28px] text-center'>
            We are focused on providing cost effective, innovative products and services to the operating room. We work with surgical specialists in areas such as Cardiovascular, Cardiothoracic, Neuro and Spine, Gynecology, Orthopedics, and Urology, as well as, in General surgery.
          </p>
        </div>

      </div>

    </main>
  );
}

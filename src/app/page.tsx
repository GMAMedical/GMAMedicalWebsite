
import Header from './Components/Header'
import Footer from './Components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <main>

      < Header />

      <div id='banner-top-home' className='relative text-center mt-[45px]'>
        <img src="/Images/blue-cover-2.png" alt="Blue Surgical Background" className='w-full blur-sm' />

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-[120px] font-bold font-roboto-condensed text-gma-text-white'>GMA MEDICAL</h1>
          <h3 className='mt-2 text-lg font-roboto-condensed text-gma-text-white'>
            Quality service backed by quality products by companies the world trust.
          </h3>
        </div>
      </div>


    <div id='our-mission' className='my-[80px] text-center px-4'>
        <h2 className='text-[45px] font-roboto-condensed font-bold text-gma-text-title'>
        Our Mission
      </h2>

      <p className='text-[19px] font-roboto-condensed text-gma-text-p max-w-[900px] mx-auto leading-[45px] mt-4'>
        GMA Medical is focused on providing new and cost efficient technologies for the Surgical Services market that will improve patient outcomes, improve a facility's processes, and improve the surgeon's ability to perform procedures. Our commitment is to assist our customers to meet their objectives.
      </p>
    </div>


      <div id='manufacturers'>
        <h2>MANUFACTURERS</h2>
        <h3>These companies are what makes US happen.</h3>
        <div id='manufacturers-images'>
          {/* TODO add all static manufacturers images when Jeff sends them */}
        </div>
      </div>

      <div id='whats-next'>
        <h2>What's Next?</h2>
        <h3>Not sure what's next? Browse our wide selection of products—then reach out! It's that easy.</h3>
        <Link href="/Contact">Contact</Link>     
      </div>

      <div id='more-about-us'>
        <div id='values'>
          <h2>OUR VALUES</h2>
          <h3>What makes us... US</h3>
        </div>
        <div id='values-desc'>
          <div id='values-desc-1'>
            <ul>
              <li>Providing exceptional service and continuous support</li>
              <li>Treating people we contact with respect and courtesy</li>
            </ul>
          </div>
          <div id='values-desc-2'>
            <ul>
              <li>Being professional</li>
              <li>Doing everything we do well</li>
              <li>Demonstrating rapid response</li>
            </ul>
          </div>
        </div>
        <div id='exp'>
          <h2>OUR EXPERIENCE</h2>
          <h3>A little background about us.</h3>
        </div>
        <div id='exp-desc'>
          <p>We are based on 10+ years of sales experience with Stryker, Zimmer, Karl Stortz, and Olympus. We have developed strong relationships with the administrations, nurses, and doctors of leading health care providers in Southern Ohio, Indiana and Kentucky.</p>
        </div>
        <div id='focus'>
          <h2>OUR FOCUS</h2>
          <h3>What's our goal?</h3>
        </div>
        <div id='focus-desc'>
          <p>We are focused on providing cost effective, innovative products and services to the operating room. We work with surgical specialists in areas such as Cardiovascular, Cardiothoracic, Neuro and Spine, Gynecology, Orthopedics, and Urology, as well as, in General surgery.</p>
        </div>
      </div>
      

      < Footer />
    </main>
  );
}

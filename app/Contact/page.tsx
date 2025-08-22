

export default function Contact() {


  return (

    <div>

      <div id='form-container-contact' className="text-center w-full my-[95px]">

        <div id='title-contact' className="bg-gma-gray pt-[8px] pb-[55px] md:p-[55px] w-full md:w-5/6 md:mx-auto rounded-2xl">

          <h2 className="font-roboto-condensed text-gma-text-white text-[55px] font-bold mt-[45px]">CONTACT</h2>

          <h3 className="font-roboto-condensed text-gma-text-white text-[20px]">Help us help you.</h3>

          <div id='contact-form' className="w-full flex justify-center my-[35px]">

              <div
                className="w-full md:max-w-md bg-white rounded-2xl shadow-md p-6 space-y-4 border-6 border-[#235CAD]"
              >

                <h2
                  className="text-[38px] font-roboto-condensed font-bold text-gma-text-title lg:text-[45px]"
                >Jeff Betz</h2>

                <hr />

                <p
                  className="text-[18px] font-roboto-condensed text-gma-text-p max-w-[900px] mx-auto leading-[25px] lg:leading-[35px] mt-4"
                >Please include your name, email, and phone number in your choice of contact.</p>
                <h3
                  className="text-[24px] font-roboto-condensed font-bold text-gma-text-title lg:text-[32px]"
                >Thank you!</h3>

                <hr />

                <div className="flex flex-col md:flex-row justify-center gap-8 mt-6">

                  <div className="flex flex-col items-center text-center">
                    <a
                      href="tel:513-368-3152"
                      className="bg-[#235CAD] w-40 md:w-48 px-6 py-3 rounded-full text-white font-roboto-condensed font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 shadow-md text-center"
                    >Phone</a>
                    <p className="mt-2 text-gray-800 text-sm md:text-base">513-368-3152</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <a
                      href="mailto:jbetz@gmamedical.com"
                      className="bg-[#235CAD] w-40 md:w-48 px-6 py-3 rounded-full text-white font-roboto-condensed font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 shadow-md text-center"
                    >Email</a>
                    <p className="mt-2 text-gray-800 text-sm md:text-base break-all">jbetz@gmamedical.com</p>
                  </div>

                </div>

              </div>

          </div>

        </div>

      </div>

    </div>
  );
}

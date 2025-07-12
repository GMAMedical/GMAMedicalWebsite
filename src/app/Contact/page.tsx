

export default function Contact() {
  return (
    <div>

      <div className="w-screen flex justify-center py-[55px]">
        <img 
          src="/Images/GMA-Logo-w-text.jpg"
          alt="GMA Medical Logo"
          className="w-5/6 rounded-2xl"
        />
      </div>

      <div id='form-container-contact' className="text-center w-full">

        <div id='title-contact' className="bg-gma-gray p-[55px] w-5/6 mx-auto rounded-2xl">
          <h2 className="font-roboto-condensed text-gma-text-white text-[65px] font-bold">CONTACT</h2>
          <h3 className="font-roboto-condensed text-gma-text-white text-[20px]">Help us help you.</h3>
        </div>

        <div id='contact-form'>
          {/* TODO apply contact form here */}
        </div>

      </div>

      
    </div>
  );
}
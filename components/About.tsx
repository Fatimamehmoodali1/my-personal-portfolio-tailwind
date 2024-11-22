import Image from "next/image";
import Button from "./Button";


const About = () => {
  return (
    <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-20 lg:py-20 bg-[#f7f7f7]'>
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-30">About</div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
         <p className='mb-20 px-10 font-black mt-5'>
          <span className='font-extrabold'>Well, If i talk about mySelf, My name is Fatima & Daughter of Mehmood Ali 
            and If i talk about my Quilifications so, my Quilification is matric  is in progrees as well as i am a Full_Stack_Developer except this 
            i am a Programmer Apart from this i am a Web-designer beside i have experiance in HTML, CSS and responsive website as well as 
            i am a UI/UX Designer with a strong background in web development. i aim to bridge the gap between aesthetics an 
            functionality. My journey begen with a love for coding and envolved into a passion for design, enabling me to 
            create seamless digital experiance.... 
             </span>
         </p>
         <Button
          type="button"
          title="Read More"
          icon="/more.svg"
          variant="btn_dark_rounded"
          /> 
        </div>
        <div className="flex-1 flexCenter">
          <Image src='/portfolio-image-1.jpg' alt="about" height={455} width={455} className="w-auto rounded-full shadow-sm" />
        </div>
      </div>

    </section>
  )
}

export default About;





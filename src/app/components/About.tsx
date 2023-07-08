import Image from "next/image";
import { BsGithub, BsLinkedin } from 'react-icons/bs';


function Home() {
  return (
   <>
   <div className="flex items-center mt-2">
          <span className='flex items-center mx-6 mr-4 text-xl text-black hover:text-blue-600'>
            <a href='https://www.linkedin.com/in/pablolandimdesadev/'
              target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </span>
          <span className='flex items-center mx-6 mr-4 text-xl text-black hover:text-zinc-600'>
            <a href='https://github.com/PabloLSa'
              target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </span>
        </div>
        {/* <div className="flex flex-col items-center justify-center w-full px-4 sm:flex-row">
        <Image
            src="/myphototwo.jpeg"
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
         /> 
          </div> */}
         
</>
           

          
        
  );
}
export default Home;
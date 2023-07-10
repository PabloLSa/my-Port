import Image from "next/image";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaReact, FaDocker } from 'react-icons/fa';


function Home() {
  return (
   <>
   <div className="flex items-center mt-2">
          <span className='flex items-center mx-6 mr-4 text-xl text-black hover:text-blue-950'>
          <a href='https://docs.docker.com/' target="_blank" rel="noreferrer">
      <FaDocker />
    </a>
          </span>
          <span className='flex items-center mx-6 mr-4 text-xl text-black hover:text-blue-500'>
         
            <a href='https://react.dev/' target="_blank" rel="noreferrer">
      <FaReact />
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
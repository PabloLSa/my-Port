import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black py-6 flex justify-center">
      <div className="flex items-center space-x-4">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/React.jpeg"
            alt="Minha Foto"
            width={60}
            height={60}
          />
        </div>
        <div className="text-white">
          <p className="font-bold font-sans">Pablo Landim de Sá</p>
          <p>Web Developer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

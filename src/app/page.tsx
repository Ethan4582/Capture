import ContactPage from "@/components/Footer";
import Footer from "@/components/Footer";
import Text from "@/components/text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Navabar */}
      <div>
        <div className="flex justify-between items-center p-8">
          <a href="./" className="text-[18px] uppercase font-bold font-['Bebas_Neue','Bebas_Neue_Placeholder',sans-serif]">Alex Smith</a>
          <div className="flex text-[14px] space-x-4">
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">Photos</a>
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">Videos</a>
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">About</a>
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">Contact</a>
          </div>
        </div>

          <ContactPage/>

      </div> 
      

    </div>
  );
}
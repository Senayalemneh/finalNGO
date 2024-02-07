import React from "react";
import HOMEIMAGE from "../images/homeimage.jpg";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Director from "../images/Director.jpg"
import HOMELOGO from "../images/NICEHOMEIMAGE.png"
import MUYA from "../images/muya masitemariya.jpg"
import MUYA2 from "../images/day care service.jpg"
import MUYA3 from "../images/Daycare service.png"
import MUYA4 from "../images/VOT1.jpg"
import SENAY from "../images/IT Technican.jpg"
import HAREGEWEYIN from "../images/Haregeweyin .png"
import IMG1 from "../images/111.jpg"
import IMG2 from "../images/222.jpg"
import IMG3 from "../images/333.jpg"
import IMG4 from "../images/444.jpg"
import IMGFINAL from "../images/Final NGO.png"



export default function Home() {
  return (
    <div className="">
    <Navbar />
         <div className="flex flex-col">
    <div className="bg-indigo-600 min-h-screen ">
    <div>
    <div className="h-full">
      <div className="flex">
      <img className="w-full h-2/6 " src={IMGFINAL} alt="Home Image"/>
      </div>
      
      {/* <div className=" text-strock text-stroke-black text-4xl ">
      <h1 className="absolute rounded-2xl  h-16  w-70 opacity-100 lg:inset-28 lg:text-4xl md:inset-24 md:text-2xl sm:inset-20 sm:text-xl inset-20 text-green-400 text-center font-bold text-stroke  ">Bright Thought Women and Children Organization!</h1>
      <h1 className="absolute rounded-2xl  h-20  w-70 opacity-100 lg:inset-48 lg:text-4xl md:inset-24 md:text-2xl sm:inset-20 sm:text-xl inset-30  text-green-400 text-center font-bold">Empowering Women, Nurturing Children: Building a Brighter Future Together</h1>
      </div> */}
      </div>
    </div>
    </div>


          <div>
            <h1 className="font-bold text-center text-6xl text-blue-600">Director Message</h1>
          </div>


    <div className="grid grid-cols-2 sm:grid-cols-2 m-6 mt-15">
    <div>
       <img className="w-full m-4 hover:rounded-3xl hover:opacity-85 hover:cursor-pointer" src={Director}/>
      </div>
          
      <div >
        <h1 className="m-5 text-center m-10">Dear Supporters and Champions of Bright Thought Children and Women Organization,

As the director of this transformative endeavor, I am filled with gratitude for the unwavering support that has fueled our journey towards creating a profound impact. At Bright Thought, our vision extends beyond providing a caring daycare and empowering through skill development; it resonates with the belief that every child and woman, irrespective of their circumstances, holds boundless potential. We aspire to mold not just skilled individuals but extraordinary citizens, instilling values of compassion, integrity, and community service. Our holistic approach, encompassing mentorship, education, and practical training, aims to nurture leaders who will contribute positively to the growth of our nation.

Our commitment goes far beyond childhood; it is a lifelong dedication to breaking the cycle of poverty. By imparting practical skills and knowledge, we strive to build self-sufficiency and resilience, enabling individuals to break free from the chains that bind them. We invite you to join us in this collective endeavor, to be part of a movement that creates a future where every child and woman has the opportunity to shine. Together, let us sow the seeds of hope, compassion, and empowerment, weaving a narrative that transcends adversity and fosters a world radiating with the brilliance of empowered lives.

With heartfelt appreciation,
<br></br>
<h1 className=" font-bold text-4xl text-blue-300"> Senayit Degefu</h1>
<br></br>
Director, Bright Thought Children and Women Organization</h1>
      </div>

           
      
    </div>

          <div>
            <h1 className="font-bold text-center text-6xl mb-10  text-blue-600">Board Of Directors</h1>
          </div>
 

          <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 m-10 ">
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110  ">
                <div><img  className="w-full h-64 mb-5 " src={SENAY}/></div>
                <div><p className="text-center lg:text-xl font-bold text-blue-600">ሠናይ አለምነህ</p></div>
                <div><p className="text-center lg:text-xl font-bold">የቦርዱ ፀሃፊ እና የአይቲ ባለሙያ</p></div>
                <div><p className="text-center lg:text-xl font-bold">Board Clerk and IT specialist</p></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110 "> 
             <div><img  className="w-full h-64 mb-5" src={HAREGEWEYIN}/></div>
             <div><p className="text-center lg:text-xl font-bold text-blue-600">ፕሮፌሰር ሐረገወይን አሰፋ</p></div>
                <div><p className="text-center lg:text-xl font-bold">የቦርዱ አባል</p></div>
                <div><p className="text-center lg:text-xl font-bold">Member of the board</p></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110 ">
             <div><img  className="w-full h-64 mb-5" src={IMG1}/></div>
             <div><p className="text-center lg:text-xl font-bold text-blue-600">ይበልጣል አማረ</p></div>
                <div><p className="text-center lg:text-xl font-bold">የቦርዱ ገንዘብ ያዥ</p></div>
                <div><p className="text-center lg:text-xl font-bold">Member of the board</p></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110 ">
             <div><img  className="w-full h-64 mb-5" src={IMG2}/></div>
             
                <div><p className="text-center lg:text-xl font-bold text-blue-600">ብንያም ሰለሞን</p></div>
                <div><p className="text-center lg:text-xl font-bold">የቦርዱ አባል</p></div>
                <div><p className="text-center lg:text-xl font-bold">Member of the board</p></div>
                 </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110 ">
             <div><img  className="w-full h-64 mb-5" src={IMG3}/></div>
                <div><p className="text-center lg:text-xl font-bold text-blue-600">ሠላም አበበ</p></div>
                <div><p className="text-center lg:text-xl font-bold">የቦርዱ አባል</p></div>
                <div><p className="text-center lg:text-xl font-bold">Member of the board</p></div>
             </div>
             <div className="border h-96 shadow-lg  flex flex-col hover:scale-110 ">
             <div><img  className="w-full h-64 mb-5" src={IMG4}/></div>
                <div><p className="text-center lg:text-xl font-bold text-blue-600">አዲስአለም ገብረእግዚአብሔር</p></div>
                <div><p className="text-center lg:text-xl font-bold">የቦርዱ አባል</p></div>
                <div><p className="text-center lg:text-xl font-bold">Member of the board</p></div>
             </div>
          </div>



        </div>
        </div>
    <Footer />
  </div>
  );
}

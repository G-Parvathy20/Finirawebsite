import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Header/Header";
import About from "@/components/Header/Aboutus";
import Companies from "@/components/Header/Companies";
import TeamSection from "@/components/Header/OurTeam";
import MediaSection from "@/components/Header/Media";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Companies/>
      <TeamSection/>

      <section id="careers" className="bg-white text-center">
        <div>
          <h1 className="text-center pt-40 text-black text-2xl font-bold">Get in Touch</h1>
          <p className="text-center pt-7 text-black">Have questions or need more information? Reach out to us and let's explore how we can assist you.</p>
          <button className="bg-purple-500 text-white font-bold px-8 py-2 rounded text-center mt-8">Find Out More</button>
        </div>
      </section>

      <MediaSection/>
      <Footer/>
    </div>
  );
}

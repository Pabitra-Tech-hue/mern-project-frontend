import Footer from "@/components/client/layout/footer";
import NavBar from "@/components/client/layout/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nepali Pasal",
  description: " About Nepali Pasal for any questions or support",
  keywords: ["About", "support", "Nepali Pasal"],
};

const AboutUs = () => {
  return (
    <main>
      <NavBar/>
      <h1>About Us Page</h1>
      <Footer/>
    </main>
  );
};

export default AboutUs
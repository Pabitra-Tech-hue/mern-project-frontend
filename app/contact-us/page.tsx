
import Footer from "@/components/client/layout/footer";
import NavBar from "@/components/client/layout/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nepali Pasal",
  description: "Contact Nepali Pasal for any questions or support",
  keywords: ["contact", "support", "Nepali Pasal"],
};

const Page = () => {
  return (
    <main>
      <NavBar/>
      <h1>Contact Us Page</h1>
      <Footer/>
    </main>
  );
};

export default Page;


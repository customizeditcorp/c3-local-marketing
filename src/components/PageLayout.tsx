import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CallNowButton from "./CallNowButton";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 sm:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
      <CallNowButton />
    </div>
  );
};

export default PageLayout;

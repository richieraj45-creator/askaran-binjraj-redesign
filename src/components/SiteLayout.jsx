import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

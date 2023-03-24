import Footer from "./footer";
import Navbar from "./nav";

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
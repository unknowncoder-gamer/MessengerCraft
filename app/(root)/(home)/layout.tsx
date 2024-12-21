import NavBar from "@/components/my ui/home/Nav";
import Footer from "@/components/my ui/home/Footer";

interface Props {
  children: React.ReactNode;
}

const HomeLAyout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLAyout;

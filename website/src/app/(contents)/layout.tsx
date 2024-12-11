import Footer from "@/components/footer";
import Partner from "@/components/footer/partner";
import Header from "@/components/header";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      {children}
      <div className="lg:mt-[100px] sm:mt-16 mt-10">
        <Partner />
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ContentLayout;

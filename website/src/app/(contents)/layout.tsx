"use client"
import Footer from "@/components/footer";
import Partner from "@/components/footer/partner";
import Header from "@/components/header";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {

  const [loading,setLoading]= useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // ページがすでに読み込み済みの場合
      handleLoad();
    } else {
      // ページの読み込みが完了したら発火
      window.addEventListener("load", handleLoad);
    }

    // クリーンアップ
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      {
          loading ? (
            <div className="flex justify-center items-center h-[500px]">
              <Loader />
            </div>
          ):(
      children
          )}

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

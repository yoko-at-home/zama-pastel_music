// pages/index.js
import HeroSection from "@/components/HeroSection";
import { siteMetadata } from "@/data/siteMetadata";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{siteMetadata.title}</title>
      </Head>

      {/* ヒーローセクション */}
      <HeroSection />

      {/* サービスセクション */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Design</h4>
              <p>Create stunning visuals that captivate your audience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Development</h4>
              <p>Build functional and performant web applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Marketing</h4>
              <p>Expand your reach and attract new customers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

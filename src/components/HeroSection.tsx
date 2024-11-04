import { siteMetadata } from "@/data/siteMetadata";

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center bg-[url('/static/images/pink-bubbles.jpeg')] h-screen flex items-center justify-center text-center">
      <div className="bg-primary bg-opacity-50 text-whitish p-10 rounded-lg max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
          {siteMetadata.title}
        </h2>
        <p className="text-lg mb-6">〜フルート＆オカリナ〜</p>
        <a
          href="#about"
          className="bg-sky-300/80 hover:bg-primary text-whitish py-2 px-4 rounded-md"
        >
          ご挨拶
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

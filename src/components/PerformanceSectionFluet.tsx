const PerformanceSectionFluet = () => {
  const title = "フルート演奏"; // Replace with your title
  const description =
    "フルートといえばブラスバンドの学生さんなんかで習いたい人がいそうですし、音大の受験指導などもしているのであれば、その辺りも盛り込んではどうでしょう？"; // Replace with your song description
  const youtubeLinks = [
    "https://youtu.be/vzVN8W5KkiE?si=Il3alAZInAzXJ5Lr", // Replace with actual YouTube links
    "https://youtu.be/cZdUxhtlTnw?si=dfV6PZN8cNhqPtWn",
    "https://youtu.be/cbJ1bikYMlE?si=uUPtBCXspFXxu2c8",
  ];

  return (
    <div className="text-center py-20 px-4" id="performance">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      <p className="mb-8">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {youtubeLinks.map((link, index) => {
          // Extract video ID from the youtu.be link
          const videoId = link.split("/").pop();
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          return (
            <div className="relative pb-9/16" key={index}>
              {" "}
              {/* Aspect ratio helper */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceSectionFluet;

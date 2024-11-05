const PerformanceSection = () => {
  const title = "オカリナ演奏"; // Replace with your title
  const description = "オカリナの優しい響きをお楽しみください"; // Replace with your song description
  const youtubeLinks = [
    "https://youtu.be/H84wd-jGkGw?si=CkDgt0chDgs4E1n-", // Replace with actual YouTube links
    "https://youtu.be/eM8UJ9IV_K0?si=jWeFraSVTxWGiZjS",
    "https://youtu.be/0AI3Ih7ksEo?si=KXboS3ynvE_Oz4Yp",
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

export default PerformanceSection;

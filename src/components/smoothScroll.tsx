const SmoothScrollLink = ({
  targetId,
  children,
}: {
  targetId: string;
  children: React.ReactNode;
}) => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleScroll} className="text-blue-500">
      {children}
    </a>
  );
};

export default SmoothScrollLink;

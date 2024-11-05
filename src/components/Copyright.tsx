import { siteMetadata } from "@/data/siteMetadata";

const Copyright = () => {
  return (
    <div className="flex justify-center items-centerw-full bg-repeat-x sm:bg-cover bg-left-top bg-[url('/static/images/IMG_0158.JPG')]">
      <div className=" bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
        <p className="text-gray-400 p-3 m-6">
          {`© ${new Date().getFullYear()} `} {siteMetadata.title}. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyright;

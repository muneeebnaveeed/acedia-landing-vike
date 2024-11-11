import HomeHeaderImage from "../../assets/home-header.png";
import Gun21Image from "../../assets/gun2-1.jpg";

export default function Page() {
  return (
    <>
      <div className="relative">
        <img src={HomeHeaderImage} className="-z-10 hidden h-auto min-h-[780px] max-w-full md:inline" />
        <img src={Gun21Image} className="-z-10 h-auto max-h-[1100px] min-h-[900px] w-full object-cover md:hidden" />
        <div className="absolute bottom-36 w-full md:bottom-14">
          <div className="flex flex-col items-center justify-center gap-6 px-12 sm:justify-center md:flex-row md:flex-wrap md:items-end md:gap-8 md:px-20 lg:justify-between">
            <div className="text-center font-serif text-white lg:text-left">
              <h1 className="text-3xl font-semibold uppercase leading-[80px] md:text-[80px]">The Grave Keeper</h1>
              <p className="max-w-[1160px] text-base leading-5 md:text-[29px] md:leading-[36px]">
                A soulslike FPS. A Lovecraftian tale of an archaeologist’s bid for sanity and survival in the cosmic
                nightmare he finds himself in.
                <span className="font-bold">Coming early 2025.</span>
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                className="font-regular flex items-center gap-4 rounded-full bg-[#A2FF00] px-6 py-1.5 font-serif text-base leading-[36px] text-black transition-colors hover:bg-[#8ad900] md:px-8 md:py-2 md:text-lg md:font-medium"
              >
                Wishlist on Steam
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden text-black md:block"
                >
                  <path
                    d="M20.8107 12.5306L14.0607 19.2806C13.9199 19.4213 13.7291 19.5004 13.53 19.5004C13.331 19.5004 13.1401 19.4213 12.9994 19.2806C12.8587 19.1399 12.7796 18.949 12.7796 18.75C12.7796 18.551 12.8587 18.3601 12.9994 18.2194L18.4697 12.75H3.78003C3.58112 12.75 3.39035 12.671 3.2497 12.5303C3.10905 12.3897 3.03003 12.1989 3.03003 12C3.03003 11.8011 3.10905 11.6103 3.2497 11.4697C3.39035 11.329 3.58112 11.25 3.78003 11.25H18.4697L12.9994 5.78061C12.8587 5.63988 12.7796 5.44901 12.7796 5.24999C12.7796 5.05097 12.8587 4.8601 12.9994 4.71936C13.1401 4.57863 13.331 4.49957 13.53 4.49957C13.7291 4.49957 13.9199 4.57863 14.0607 4.71936L20.8107 11.4694C20.8804 11.539 20.9357 11.6217 20.9734 11.7128C21.0112 11.8038 21.0306 11.9014 21.0306 12C21.0306 12.0986 21.0112 12.1961 20.9734 12.2872C20.9357 12.3782 20.8804 12.461 20.8107 12.5306Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

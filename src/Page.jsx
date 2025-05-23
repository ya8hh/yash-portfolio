import portfolioImage from './assets/portofolioimage.png';
import NavBar from './NavBar';

function Page() {
  return (
    <div className="min-h-screen bg-black text-white px-4 flex flex-col pb-20"> {/* pb-20 to avoid content under footer */}

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">

          {/* Left - Text Section */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Yash, This Side</h1>
            <p className="text-lg text-gray-400 mb-6">I like to code occasionally</p>

            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-400 text-sm mb-1">
              I’m a final-year CS student who picked up skills by building, breaking and fixing things.
            </p>
            <p className="text-gray-400 text-sm mb-1">
              I like figuring out how things work, especially when they don’t.
            </p>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={portfolioImage}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border border-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Sticky Footer NavBar */}
      <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2
    bg-black bg-opacity-70
    backdrop-blur-md
    rounded-full
    py-3 px-8
    flex justify-center gap-6
    z-50
    shadow-lg">
        <NavBar />
      </footer>
    </div>
  );
}

export default Page;

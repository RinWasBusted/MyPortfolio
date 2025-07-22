export default function Test() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-4">
      {/* Card 1: UI/UX Design */}
      <div className="relative bg-gray-800 rounded-3xl p-6 shadow-xl w-full max-w-sm overflow-hidden">
        <h3 className="text-white text-xl font-semibold mb-4">UI/UX Design</h3>
        <img
          src="/path/to/ui-ux-design-mockup.png"
          alt="UI/UX Design Mockup"
          className="rounded-lg mb-4"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card 2: Web Design */}
      <div className="relative bg-gray-800 rounded-3xl p-6 shadow-xl w-full max-w-sm overflow-hidden">
        <h3 className="text-white text-xl font-semibold mb-4">Web Design</h3>
        <img
          src="/path/to/web-design-mockup.png"
          alt="Web Design Mockup"
          className="rounded-lg mb-4"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card 3: Landing Page */}
      <div className="relative bg-gray-800 rounded-3xl p-6 shadow-xl w-full max-w-sm overflow-hidden">
        <h3 className="text-white text-xl font-semibold mb-4">Landing Page</h3>
        <img
          src="/path/to/landing-page-mockup.png"
          alt="Landing Page Mockup"
          className="rounded-lg mb-4"
        />
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

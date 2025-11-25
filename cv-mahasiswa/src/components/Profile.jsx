import React from "react";

const Profile = ({ data }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src={data.photo_url}
              alt={data.full_name}
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{data.full_name}</h1>
            <p className="text-xl text-blue-100 mb-4">{data.headline}</p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                {data.nim}
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                {data.prodi}
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                Angkatan {data.angkatan}
              </span>
            </div>

            <p className="text-blue-50 mb-4 leading-relaxed">
              {data.short_bio}
            </p>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{data.location}</span>
              </div>

              {data.portfolio_url && (
                <a
                  href={data.portfolio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Portfolio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

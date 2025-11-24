import React from "react";

const Profile = ({ data }) => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <img
          src={data.photo_url}
          alt={data.full_name}
          className="profile-photo"
        />
        <div className="profile-info">
          <h1>{data.full_name}</h1>
          <p className="headline">{data.headline}</p>
          <div className="profile-details">
            <span>NIM: {data.nim}</span>
            <span>Prodi: {data.prodi}</span>
            <span>Angkatan: {data.angkatan}</span>
          </div>
          <p className="bio">{data.short_bio}</p>
          <p className="location">📍 {data.location}</p>
          {data.portfolio_url && (
            <a
              href={data.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Portfolio
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;

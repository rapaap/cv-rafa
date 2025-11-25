import React from "react";

function Profile({ data }) {
  const { profile, social_media } = data;

  return (
    <div className="profile-section">
      <div className="profile-header">
        <img
          src={profile.photo_url}
          alt={profile.full_name}
          className="profile-photo"
        />
        <div className="profile-info">
          <h1>{profile.full_name}</h1>
          <p className="headline">{profile.headline}</p>
          <div className="profile-details">
            <span>📚 {profile.prodi}</span>
            <span>🎓 {profile.nim}</span>
            <span>📅 Angkatan {profile.angkatan}</span>
            <span>📍 {profile.location}</span>
          </div>
        </div>
      </div>

      <div className="profile-bio">
        <h3>Tentang Saya</h3>
        <p>{profile.short_bio}</p>
      </div>

      <div className="social-media">
        <h3>Connect With Me</h3>
        <div className="social-links">
          {social_media.github && (
            <a
              href={social_media.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {social_media.linkedin && (
            <a
              href={social_media.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
          {social_media.instagram && (
            <a
              href={social_media.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
          {social_media.email && (
            <a href={`mailto:${social_media.email}`}>Email</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

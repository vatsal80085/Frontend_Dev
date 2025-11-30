import React from "react";

function ProfileCard({ name = "John Doe", role = "Developer", bio = "A short bio.", avatarUrl }) {
    const defaultAvatar = "https://via.placeholder.com/96";
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",   // <--- Add this
            width: "100%"
        }}>
            <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, display: "flex", gap: 16, alignItems: "center", maxWidth: 420 }}>
                <img src={avatarUrl || defaultAvatar} alt={`${name} avatar`} style={{ width: 196, height: 196, borderRadius: 8, objectFit: "cover" }} />
                <div>
                    <h3 style={{ margin: "0 0 6px" }}>{name}</h3>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#666" }}>{role}</p>
                    <p style={{ marginTop: 8, fontSize: 13, color: "#333" }}>{bio}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;

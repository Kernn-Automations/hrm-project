import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const colors = [
  "#4CAF50",
  "#2196F3",
  "#FF5722",
  "#9C27B0",
  "#FF9800",
  "#795548",
];
const bgColors = [
  "#a1dda3ff",
  "#a9cce8ff",
  "#ffc7b5ff",
  "#e9adf4ff",
  "#ffc267ff",
  "#b19186ff",
];

const AvatarWithMenu = ({ name, src, onProfile, onLogout }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Extract initials from name
  const getInitials = (fullName) => {
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Pick a background color
  //   const bgColor = name ? bgColors[name.length % colors.length] : bgColors[1];
  //   const color = name ? colors[name.length % colors.length] : colors[1];
  const bgColor = "var(--primmary-background)";
  const color = "var(--primmary-color)";
  const initials = name ? getInitials(name) : null;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Avatar */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: 43,
          height: 43,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 600,
          backgroundColor: src ? "transparent" : bgColor,
          color: color,
          border: `1px solid #b6b6b6ff`,
          cursor: "pointer",
        }}
      >
        {src ? (
          <img
            src={src}
            alt={name ? name : "user"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : initials ? (
          initials
        ) : (
          <FaUser />
        )}
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: 0,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "120px",
            zIndex: 1000,
          }}
        >
          <div
            onClick={() => {
              setOpen(false);
              if (onProfile) onProfile();
            }}
            style={{
              padding: "10px 15px",
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              fontSize: "14px",
            }}
          >
            Profile
          </div>
          <div
            onClick={() => {
              setOpen(false);
              if (onLogout) onLogout();
            }}
            style={{
              padding: "10px 15px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarWithMenu;

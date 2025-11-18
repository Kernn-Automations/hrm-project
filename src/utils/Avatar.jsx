import React from "react";
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

const Avatar = ({ name, src }) => {
  // Extract initials from name
  const getInitials = (fullName) => {
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Pick a background color based on name length (simple hash)
  const bgColor = name ? bgColors[name.length % colors.length] : bgColors[1];
  const color = name ? colors[name.length % colors.length] : colors[1];
  const initials = name ? getInitials(name) : null;

  return (
    <div
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
        border: `1px solid #e4e4e4ff`,
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
  );
};

export default Avatar;

import React from "react";

const GeometricPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-3">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute border-2"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default GeometricPattern;

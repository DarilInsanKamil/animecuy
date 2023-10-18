import React from "react";

const HeaderMenu = ({ title, sub_title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary">{title}</h3>
        <p className="text-center text-blue-600">{sub_title}</p>
      </div>
    </div>
  );
};

export default HeaderMenu;

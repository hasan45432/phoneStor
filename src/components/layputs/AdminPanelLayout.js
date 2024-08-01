import React from "react";

const LayoutAdmin = ({ children }) => {
  console.log(children);
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};


export default LayoutAdmin;

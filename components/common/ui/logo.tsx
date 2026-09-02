import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="max-h-14 max-w-14 overflow-clip rounded">
      <Image
        src={"/logo.svg"}
        alt="alt"
        height={200}
        width={200}
        loading="eager"
        className="h-16 object-cover objetc-bottom w-20 rounded"
      />
    </div>
  );
};

export default Logo;

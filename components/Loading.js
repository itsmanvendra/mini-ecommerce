import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="border-2 bg-[#0000000D] h-44 rounded-xl"></div>
      <div className="px-2">
        <p className="text-xl font-openSans font-semibold text-[#f2f2f2] bg-[#f2f2f2] p-1 my-1 rounded-xl">
          Nike Air MAX
        </p>
        <p className="text-base font-roboto font-medium text-[#f2f2f2] bg-[#f2f2f2] p-1 rounded-xl">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;

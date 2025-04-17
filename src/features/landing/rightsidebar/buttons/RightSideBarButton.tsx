import React from "react";
import classNames from "classnames";

interface RightSideBarButtonProps {
  handleClick: () => void;
  text: string;
  inactiveColor: string;
  activeColor: string;
}

export const RightSideBarButton: React.FC<RightSideBarButtonProps> = ({
  handleClick,
  text,
  inactiveColor,
  activeColor,
}) => {
  return (
    <div
      onClick={handleClick}
      className={classNames(
        inactiveColor,
        activeColor,
        "flex justify-center items-center w-full h-10 rounded-2xl p-3 mb-5 border-solid border-1 border-gray-300 hover:border-blue-300 hover:cursor-pointer"
      )}
    >
      <p className="text-sm text-white">{text}</p>
    </div>
  );
};

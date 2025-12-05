import React from "react";

export interface IconsProps {
  size: string;
}

const StyleProps: Record<string, string> = {
  lg: "size-5",
  md: "size-4",
  sm: "size-2",
};

const PlusIcon = (props: IconsProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={StyleProps[props.size]}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;

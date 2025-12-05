// abb button kis type ka ayega wo batao yha p okkh!..

import React, { type ReactElement } from "react";

export interface ButtonProps {
  variant?: "Primary" | "Secondary";
  size: "sm" | "md" | "lg";
  text: string | ReactElement;
  onClick?: () => void;
  startIcon?: ReactElement;
}

const sizeStyle: Record<string, string> = {
  lg: "px-8 py-4  border rounded-2xl",
  md: "px-6 py-2 border rounded-2xl",
  sm: "px-6 py-2  border rounded-2xl",
};

const variantStyle: Record<string, string> = {
  Primary: "bg-red-600 text-white",
  Secondary: "bg-purple-400 text-white",
};

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={`${sizeStyle[props.size]} ${variantStyle[props.variant!]}`}
      >
        <h1 className="flex items-center gap-2">
          {" "}
          {props.startIcon} {props.text}
        </h1>
      </button>
    </div>
  );
};

// sizeStyle[props.size] ye hamne uparr isliye liya hia bcz ye dynamic part wala hai okkh!..
// object mai bhi do chize s excess karte hai data like ekk to . s aur ek arrays s okkh!..
// . s karte time wo data dynamic nahi hota means runtime p chize change nahi hongi okkh!>.
// but [] arrays s change agr karneg to wo chnage ho jayega okkjh!>.

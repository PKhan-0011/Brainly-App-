// abb button kis type ka ayega wo batao yha p okkh!..

import React, { type ReactElement } from "react";

export interface ButtonProps {
  variant?: "Primary" | "Secondary";
  size: "sm" | "md" | "lg";
  text: string | ReactElement;
  onClick?: () => void;
}

const sizeStyle: Record<string, string> = {
  lg: "px-8 py-4 bg-red-800 border rounded-2xl",
  md: "px-4 py-2 bg-red-400 border rounded-2xl",
  sm: "px-2 py-1 bg-red-200 border rounded-2xl",
};

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className={sizeStyle[props.size]}>{props.text}</button>
    </div>
  );
};

// sizeStyle[props.size] ye hamne uparr isliye liya hia bcz ye dynamic part wala hai okkh!..
// object mai bhi do chize s excess karte hai data like ekk to . s aur ek arrays s okkh!..
// . s karte time wo data dynamic nahi hota means runtime p chize change nahi hongi okkh!>.
// but [] arrays s change agr karneg to wo chnage ho jayega okkjh!>.

import { ReactNode } from "react";

interface ButtonProps {
  content: string | ReactNode;
  onclick: () => void;
  css: string;
}

const Component = ({ content, onclick, css }: ButtonProps) => {
  return (
    <button onClick={onclick} className={css}>
      {content}
    </button>
  );
};

export default Component;

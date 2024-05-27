import { ReactNode } from "react";

interface ParagraphProps {
  content: string | ReactNode;
  css: string;
}

const Typographies = ({ content, css }: ParagraphProps) => (
  <p className={css}>{content}</p>
);

export default Typographies;

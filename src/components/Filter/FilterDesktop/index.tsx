import { ReactNode, useState } from "react";
import Button from "../../Button";

interface filterProps {
  onSearch: (text1: string) => void;
  icon?: ReactNode;
}

const Component = ({ onSearch, icon }: filterProps) => {
  const [position, setPosition] = useState<string>("");

  const handleSearchClick = () => {
    onSearch(position);
  };

  return (
    <div className="flex flex-row  items-center">
      <span>{icon}</span>
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <Button content="search" onclick={handleSearchClick} css={""} />
    </div>
  );
};

export default Component;

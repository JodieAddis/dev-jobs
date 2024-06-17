import { ReactNode, useState } from "react";
import Button from "../../Button";

interface filterProps {
  onSearch: (text1: string) => void;
  iconSearch: ReactNode;
  iconLocation: ReactNode;
}

const Component = ({ onSearch, iconSearch }: filterProps) => {
  const [position, setPosition] = useState<string>("");

  const handleSearchClick = () => {
    onSearch(position);
  };

  return (
    <div className="filter_desktop">
      <span className="icon_filter">{iconSearch}</span>
      <input
        type="text"
        placeholder="Filter by title, companies, expertise..."
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <span className="icon_filter">{iconSearch}</span>
      <input
        type="text"
        placeholder="Filter by location..."
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <Button content="search" onclick={handleSearchClick} css="filter_btn" />
    </div>
  );
};

export default Component;

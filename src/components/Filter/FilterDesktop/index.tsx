import { ReactNode, useState } from "react";
import Button from "../../Button";

interface filterProps {
  onSearch: (position: string, location: string, contract: boolean) => void;
  iconSearch: ReactNode;
  iconLocation: ReactNode;
}

const Component = ({ onSearch, iconSearch, iconLocation }: filterProps) => {
  const [position, setPosition] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [contract, setContract] = useState<boolean>(false);
  const handleSearchClick = () => {
    onSearch(position, location, contract);
  };

  return (
    <div className="filter_desktop">
      <div className="filter_desktop_container">
        <div className="input_container">
          <span className="icon_filter">{iconSearch}</span>
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="input_container input_location">
          <span className="icon_filter">{iconLocation}</span>
          <input
            type="text"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="input_checkbox">
          <input
            type="checkbox"
            checked={contract}
            onChange={(e) => setContract(e.target.checked)}
          />
          <label>full time only</label>
        </div>
      </div>
      <Button content="search" onclick={handleSearchClick} css="filter_btn" />
    </div>
  );
};

export default Component;

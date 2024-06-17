import { ChangeEvent, useState } from "react";
import Button from "../../Button";

const Component = () => {
  const [itemFilter, setItemFilter] = useState<string>("");

  return (
    <div className="absolute">
      <form className="flex flex-row justify-center">
        <div>ICON</div>
        <div>
          <input
            type="text"
            value={itemFilter}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setItemFilter(e.target.value);
            }}
          />
        </div>
        <Button content="search" onclick={() => {}} css={""} />
      </form>
    </div>
  );
};

export default Component;

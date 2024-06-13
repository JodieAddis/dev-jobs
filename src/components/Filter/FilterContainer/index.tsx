import { ChangeEvent, useState } from "react";
import Button from "../../Button";

type Item = {
  searchItem: string;
};

type Props = {
  items: Item[];
};

const Component = ({ items }: Props) => {
  const [itemFilter, setItemFilter] = useState<string>("");

  const filteredJobs = items.filter((job) =>
    job.searchItem.toLowerCase().includes(itemFilter.toLowerCase())
  );

  return (
    <div className="absolute">
      <form className="flex flex-row justify-center">
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

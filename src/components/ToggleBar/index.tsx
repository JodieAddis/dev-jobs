import { useState } from "react";
import Button from "../Button";
import IconDarkmode from "../../icons/IconDarkmode";

const Component = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  return (
    <div className="toggle_bar_container">
      <IconDarkmode kind="light" />
      <Button
        content={
          <>
            <div className="thumb"></div>
          </>
        }
        css={`toggle-btn ${toggled ? "toggled" : ""}`}
        onclick={() => {
          setToggled(!toggled);
        }}
      />
      <IconDarkmode kind="dark" />
    </div>
  );
};

export default Component;

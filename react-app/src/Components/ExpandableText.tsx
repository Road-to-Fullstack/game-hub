import { useState } from "react";
import styled from "styled-components";

const TextWrapper = styled.p``;
interface Prop {
  maxChar: number;
}

const ExpandableText = ({ maxChar }: Prop) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  let text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, ea quisquam! Expedita veniam, culpa perferendis necessitatibus quisquam et repellat, esse voluptas impedit libero sint nemo beatae praesentium! At, suscipit assumenda.;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, ea quisquam! Expedita veniam, culpa perferendis necessitatibus quisquam et repellat, esse voluptas impedit libero sint nemo beatae praesentium! At, suscipit assumenda.;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, ea quisquam! Expedita veniam, culpa perferendis necessitatibus quisquam et repellat, esse voluptas impedit libero sint nemo beatae praesentium! At, suscipit assumenda.;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, ea quisquam! Expedita veniam, culpa perferendis necessitatibus quisquam et repellat, esse voluptas impedit libero sint nemo beatae praesentium! At, suscipit assumenda.;`;

  return (
    <TextWrapper>
      {expanded ? text : text.substring(0, maxChar)}
      {text.length > maxChar ? (
        <button onClick={handleClick}>{expanded ? "Less" : "More"}</button>
      ) : null}
    </TextWrapper>
  );
};

export default ExpandableText;

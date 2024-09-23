import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : null)};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
interface ListItemProps {
  active: boolean;
}
function ListGroup({ heading, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found </p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;

import React, { useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selected, setselected] = useState(-1);
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h3>{heading}</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselected(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

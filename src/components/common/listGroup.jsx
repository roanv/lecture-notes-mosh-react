import React from "react";

const ListGroup = (props) => {
  const {
    onItemSelect: onItemSelect,
    items,
    textProperty,
    valueProperty,
    selectedItem: selectedItem,
  } = props;
  return (
    <ul className="list-group p-0">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;

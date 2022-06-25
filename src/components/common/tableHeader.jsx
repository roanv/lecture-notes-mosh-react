import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => (
            <th key={c.path || c.key} onClick={() => this.raiseSort(c.path)}>
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

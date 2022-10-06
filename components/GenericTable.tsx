import React, { ReactNode } from "react";
import Identity from "../types/Identity";

export default function GenericTable<T extends Identity>({
  data,
  columns,
}: {
  data: T[];
  columns: Column<T>[];
}) {
  const getRowContent = (row: T, col: Column<T>): JSX.Element | null => {
    if ("value" in col && col.value != undefined) {
      return <div key={col.label}>{col.value(row)}</div>;
    }
    if ("content" in col) {
      return <>{col.content}</>;
    }
    return null;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.label} scope={"col"}></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col.label + row.id}>{getRowContent(row, col)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface Column<T> {
  label: string;
  value?: (object: T) => React.ReactNode;
  content?: JSX.Element;
}

// type Column<T, K> = ColumnId & (DataColumn<T, K> | FuncationColumn);

// interface ColumnId {
//   label: string;
// }

// interface DataColumn<T, K> {
//   path: K;
// }

// interface FuncationColumn {
//   content: JSX.Element;
// }

// type Column<T extends Record<string, ReactNode>> = RequireAtLeastOne<
//   ColumnProps<T>,
//   "content" | "path"
// >;

// interface ColumnProps<T extends Record<string, ReactNode>> {
//   name: string;
//   path: keyof T;
//   content: JSX.Element;
// }

//too complicated
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

import React, { ReactNode } from "react";
import Identity from "../types/Identity";

// function Table<T, Key extends keyof T>({
//   data,
//   columns,
// }: {
//   data: T[];
//   columns: Extract<Key, string>[];
// }) {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           {columns.map((x) => (
//             <th key={x} scope={"col"}>
//               {x}
//             </th>
//           ))}
//           {/* <th scope="col">#</th>
//           <th scope="col">First</th>
//           <th scope="col">Last</th>
//           <th scope="col">Handle</th> */}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr>
//             {columns.map((col) => (
//               <td>{row[col]}</td>
//             ))}
//           </tr>
//         ))}
//         <tr>
//           <th scope="row">1</th>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <th scope="row">2</th>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <th scope="row">3</th>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }

// function getKeyOfT<T, Key extends keyof T>(array: T[], key: Key) {
//   return array[key as keyof T];
// }

// export default Table;

// function Table<T, Key extends keyof T>({
//   data,
//   columns,
// }: {
//   data: T[];
//   columns: Extract<Key, string>[];
// }) {
//   return (
//     <div>
//       {data.map((row) => (
//         <tr>
//           {columns.map((col) => (
//             <td>{row[col]}</td> //this is where the error appears
//           ))}
//         </tr>
//       ))}
//     </div>
//   );
// }

export default function Table<T extends Identity>({
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

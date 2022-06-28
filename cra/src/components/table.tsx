import { ReactNode } from "react";
import FunctionalComponent from "./functionalComponent";

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

export default function Table<
  T extends Record<string, ReactNode>,
  Key extends keyof T
>({
  data,
  columns,
}: {
  data: T[];
  columns: Extract<Key, string> | ReactNode[];
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((x) => (
            <th key={x} scope={"col"}>
              {x}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((col) => (
              <td>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

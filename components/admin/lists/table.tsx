"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = ({
  data = [],
  columns = [],
}: any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border">
        <thead>
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr
              key={headerGroup.id}
              className="border-b bg-gray-100"
            >
              {headerGroup.headers.map((header: any) => (
                <th
                  key={header.id}
                  className="p-3 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row: any) => (
            <tr
              key={row.id}
              className="border-b"
            >
              {row.getVisibleCells().map((cell: any) => (
                <td
                  key={cell.id}
                  className="p-3"
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
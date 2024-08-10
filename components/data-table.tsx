import React from "react";

interface DataTableProps {
  data: { key: string; value: string }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border-b px-4 py-2 text-left text-gray-600">Key</th>
          <th className="border-b px-4 py-2 text-left text-gray-600">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.key} className="border-b">
            <td className="px-4 py-2 font-medium">{item.key}</td>
            <td className="px-4 py-2">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

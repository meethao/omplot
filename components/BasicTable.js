import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import mock_data from './mock_data.json'
import { COLUMNS } from './columns'
import './table.css'


export const BasicTable = () =>{
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mock_data)

    const tableInstance = useTable(
        {
            columns,
            data
        }
    )

    const { getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
    } = tableInstance

    return(
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {
                           headerGroups.Header.map( column => (
                            <th {...column.getHeaderGroupProps()}>
                                {column.render('Header')}
                            </th>
                           ))}
                    </tr>
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
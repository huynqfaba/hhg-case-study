import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { Table as TableBootstrap } from 'react-bootstrap';
import styled from '@emotion/styled';

import { Header, TableInfo } from 'types/table';
import { Pagination } from './components/Pagination';

interface Props {
  data: any;
  tableInfo: TableInfo;
}

const PAGE_SIZE = 5;

export function Table(props: Props) {
  const { data, tableInfo } = props;

  const columns = useMemo(() => {
    let columnsRender: Header[] = [];
    if (tableInfo.tableName) {
      tableInfo.columns?.forEach(column => {
        columnsRender.push({
          Header: () => <p>{column.label.toUpperCase()}</p>,
          accessor: column.id,
        });
      });
    }
    return columnsRender;
  }, [tableInfo.columns, tableInfo.tableName]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: PAGE_SIZE,
      },
      autoResetPage: false,
    },
    usePagination,
  );

  return (
    <div className="mt-3">
      <TableStyled {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableStyled>
      <Pagination
        pageCount={pageCount}
        pageIndex={pageIndex}
        gotoPage={gotoPage}
      />
    </div>
  );
}

const TableStyled = styled(TableBootstrap)`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.04);
  border: 1px solid #f5f6f8;
  p {
    margin-bottom: 0;
  }

  tbody tr td:first-of-type {
    width: 40%;
  }

  tbody tr td:nth-of-type(2) {
    width: 40%;
  }

  tbody tr td:last-of-type {
    width: 20%;
  }
`;

export interface TableInfo {
  tableName: string;
  columns: Column[];
}

export interface Column {
  id: string;
  label: string;
}

export interface Header {
  Header: any;
  accessor: string;
  Cell?: any;
  SubCell?: any;
  render?: any;
}

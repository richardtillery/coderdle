import { useEffect, useRef, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { MaterialReactTable } from 'material-react-table';


const GET_ITEMS = gql`
  query AllBooks($offset: Int, $limit: Int) {
    allBooks(offset: $offset, limit: $limit) {
      id
      name
    }
  }
`;

const InfiniteTable = () => {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(10);
  const [items, setItems] = useState([]);
  
  const { data, loading, error } = useQuery(GET_ITEMS, {
    variables: { offset, limit },
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching items: {error.message}</p>;

  return (
    <MaterialReactTable
      columns={[
        { accessorKey: 'id', header: 'ID' },
        { accessorKey: 'name', header: 'Name' }
      ]}
      data={data.allBooks}
      enablePagination
      manualPagination
      onPaginationChange={(pagination) => {
        setPage(pagination.pageIndex);
      }}
      pageCount={10} // Assuming you have a way to get the total count
      rowCount={10}
    />
  );
};

export default InfiniteTable;

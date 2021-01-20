import React from 'react';
import Actions from './Actions';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';





// data
const columns = [
  {
    id: 'uid',
    label: 'ID',
    minWidth: 10,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'name',
    label: 'User Name',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email Address',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone Number',
    minWidth: 100,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(uid, name, email, phone, actions) {
  return { uid, name, email, phone, actions };
}

const rows = [
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '003', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '004', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '005', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '006', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '007', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),
  createData( '001', 'June Palack', 'jun.balack@company.com', '0069287629876', [<Actions />] ),
  createData( '002', 'Mansor Saied', 'saied.mansourk@company.com', '0062298792765', [<Actions />] ),


];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});


const UsersTable = props => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return(
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;

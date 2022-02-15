import { IconButton, TableCell, TableRow, Typography } from '@mui/material';

import { ReactComponent as DeleteIcon } from '../../images/transactionIcons/delete.svg';
import React from 'react';

function TransactionsRow({ transaction, deleteDialogHandler }) {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  });
  console.log(transaction);
  // const sum = formatter.format(transactions.sum);
  const date = `${transaction.dayCreate}.${transaction.monthCreate}.${transaction.yearCreate}`;
  // console.log('🚀 ~ file: TransactionsRow.js ~ line 14 ~ TransactionsRow ~ date', date);

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {/* <TableCell align="left">{transactions.date}</TableCell> */}
      {/* <TableCell align="left">{transactions.description}</TableCell> */}
      {/* <TableCell align="center">{transactions.category}</TableCell> */}
      {/* <TableCell align="center">
        {!transactions.isIncome ? (
          <Typography color="#E7192E" fontWeight="700" fontSize={12}>
            - {sum}
          </Typography>
        ) : (
          <Typography color="#407946" fontWeight="700" fontSize={12}>
            {sum}
          </Typography>
        )}
      </TableCell> */}
      <TableCell align="left">{date}</TableCell>
      <TableCell align="left">{transaction.description}</TableCell>
      <TableCell align="left">{transaction.category}</TableCell>
      <TableCell align="left">{transaction.sum}</TableCell>
      <TableCell align="center" sx={{ width: 110 }}>
        <IconButton
          sx={{ padding: '3px' }}
          aria-label="Удалить транзакцию"
          onClick={() => {
            // deleteDialogHandler(transaction.idT)
            console.log('id of transaction to delete ', transaction.idT);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default TransactionsRow;

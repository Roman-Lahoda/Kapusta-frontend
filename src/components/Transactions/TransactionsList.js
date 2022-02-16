import { LinearProgress } from '@mui/material';
import React from 'react';
import TransactionsItem from './TransactionsItem';
import TransactionsButtons from './TransactionsBtn';
// import { transactionSelectors } from '../../redux/transaction/transaction-selector';
// import { useSelector } from 'react-redux';
import CalendarPicker from './CalendarPicker';
import calendar from '../../images/transactionIcons/calendar.svg';

function TransactionsList({ deleteDialogHandler, transactions }) {
  //   const transactions = useSelector(transactionSelectors.getAllTransactions);
  // const transactions = [
  //   {
  //     category: 'Продукты',
  //     dayCreate: 14,
  //     description: 'erbdnbdf',
  //     id: 123456789,
  //     monthCreate: 2,
  //     sum: '7827',
  //     transactionType: 'expense',
  //     yearCreate: 2022,
  //   },
  // ];
  //   const isLoading = useSelector(transactionSelectors.isLoading);
  const date = new Date();
  return (
    <>
      {/* {isLoading && <LinearProgress />} */}
      {/* <CalendarPicker /> */}
      <div>
        <img src={calendar} alt="calendar" />
        <span>
          {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </span>
      </div>
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: 0,
          backgroundColor: '#fff',
          marginBottom: '40px',
        }}
      >
        {transactions.map(transaction => (
          <TransactionsItem
            key={transaction.idT}
            transaction={transaction}
            deleteDialogHandler={deleteDialogHandler}
          />
        ))}
      </ul>
      <TransactionsButtons />
    </>
  );
}

export default TransactionsList;
import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as selectors from '../../redux/transactions/transactions-selectors';
import transactionsOperations from '../../redux/transactions/transactions-operations';
import s from './TransactionsList.module.scss';
import Modal from '../Modal/Modal';
import EditTransaction from '../EditTransaction/EditTransaction';
import contextProps from '../../context/context';

export default function TransactionsList() {
  const { type, date, setNewDate } = useContext(contextProps);
  const dispatch = useDispatch();

  const transactions = useSelector(selectors.getTransactionsPerDay);
  const filteredTransactions = transactions.filter(item => item.type === type);
  const [modalDel, setModalDel] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [transaction, setTransaction] = useState('');

  useEffect(() => {
    if (date) {
      dispatch(transactionsOperations.getTransactionsDay(date));
    }
  }, [date, dispatch]);

  const handleDeleteClick = transaction => {
    setModalDel(true);
    setTransaction(transaction._id);
  };
  const onDelCancel = () => {
    setTransaction('');
    setModalDel(false);
  };

  const onDelOk = () => {
    setModalDel(false);
    const transactionToDel = transactions.find(item => item._id === transaction);
    dispatch(transactionsOperations.deleteTransaction(transactionToDel));
    setTransaction('');
  };

  const handleEditClick = transaction => {
    setModalEdit(true);
    setTransaction(transaction._id);
  };

  const onEditCancel = () => {
    setModalEdit(false);
    setTransaction('');
  };

  return (
    <>
      {modalDel && (
        <Modal
          modalTitle="Вы действительно хотите удалить эту запись?"
          handleClickRight={onDelCancel}
          handleClickLeft={onDelOk}
          onClose={onDelCancel}
        />
      )}
      {modalEdit && (
        <EditTransaction
          onDateChange={setNewDate}
          transaction={transactions.find(item => item._id === transaction)}
          cancelChanges={onEditCancel}
        />
      )}

      <div className={s.bodyTable}>
        <table className={s.main}>
          <thead className={s.theadTable}>
            <tr>
              <th className={`${s.th} ${s.thData}`}>Дата</th>
              <th className={`${s.th} ${s.thDesc}`}>Описание</th>
              <th className={`${s.th} ${s.thCateg}`}>Категория</th>
              <th className={`${s.th} ${s.thSum}`}>Сумма</th>
              <th className={`${s.th} ${s.thIcon}`}></th>
              <th className={`${s.th} ${s.thIcon}`}></th>
            </tr>
          </thead>
        </table>
        <div className={s.bodyTableScroll}>
          <table className={`${s.main} ${s.mainTbody}`}>
            <tbody className={s.tbodyTable}>
              {filteredTransactions.map(transaction => (
                <tr key={transaction._id} className={s.td}>
                  <td className={s.thData}>{transaction.date}</td>
                  <td className={s.tdDesc}> {transaction.subCategory}</td>
                  <td className={s.thCateg}>{transaction.category}</td>
                  <td className={`${s.tdSum} ${type !== 'income' && s.tdSumExpense}`}>
                    {type === 'income'
                      ? `${transaction.sum.toLocaleString('ru')}.00 UAH.`
                      : `-${transaction.sum.toLocaleString('ru')}.00 UAH.`}
                  </td>
                  <td className={s.thIcon}>
                    <button className={s.deleteBtn} onClick={() => handleDeleteClick(transaction)}>
                      <svg
                        className={s.deleteBtnIcon}
                        width="18"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#a)" fill="#52555F">
                          <path d="m16.308 4.023-.397-1.191a1.109 1.109 0 0 0-1.053-.759h-3.34V.986A.987.987 0 0 0 10.532 0H7.473a.987.987 0 0 0-.985.986v1.087h-3.34c-.478 0-.901.305-1.053.759l-.397 1.191a.894.894 0 0 0 .846 1.174h.415l.915 11.307c.068.839.78 1.496 1.62 1.496h7.203c.84 0 1.553-.657 1.62-1.496l.915-11.307h.23a.894.894 0 0 0 .846-1.174ZM7.543 1.055h2.92v1.018h-2.92V1.055Zm5.723 15.364a.575.575 0 0 1-.57.526H5.496a.575.575 0 0 1-.57-.526L4.017 5.197h10.157l-.908 11.222ZM2.77 4.143l.326-.977a.055.055 0 0 1 .052-.038h11.71c.024 0 .045.015.052.038l.326.977H2.77Z" />
                          <path d="m11.585 16.381.027.001a.527.527 0 0 0 .527-.5l.495-9.506a.527.527 0 0 0-1.054-.055l-.495 9.506a.527.527 0 0 0 .5.554ZM5.891 15.883a.527.527 0 0 0 1.053-.057L6.426 6.32a.527.527 0 1 0-1.054.057l.519 9.506ZM9.009 16.382a.527.527 0 0 0 .527-.527V6.348a.527.527 0 1 0-1.054 0v9.507c0 .29.236.527.527.527Z" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h18v18H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </td>
                  <td className={s.thIcon} onClick={() => handleEditClick(transaction)}>
                    <button className={s.deleteBtn}>
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                      >
                        <path
                          fill="#52555F"
                          d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

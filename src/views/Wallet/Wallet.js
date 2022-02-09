import React, { useEffect, useState } from 'react';

import AddTransaction from 'components/AddTransaction/AddTransaction';
import { Container } from 'components/Container';
import TransactionHistoryList from 'components/TransactionHistoryList/TransactionHistoryList';
// import TransactionsListMobile from 'components/TransactionsList/TransactionListMobile';
import Summary from 'components/Summary';
// import Balance from 'components/Balance';
// import ToGoReport from 'components/ToGoReport';
import Calendar from 'components/Calendar';

import useWindowDimensions from 'hooks/useWindowDimensions';
import contextProps from 'context/context';
import s from './Wallet.module.scss';
import { useSelector } from 'react-redux';
import { getLoader } from 'redux/transactions';
import Loader from 'components/Loader/Loader';

const Wallet = () => {
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');
  const [year, setYear] = useState('');
  const [picker, setPicker] = useState(false);
  const [listRender, setListRender] = useState(true);
  const loader = useSelector(getLoader);

  useEffect(() => {
    setDate(startDate);
    setYear(startDate.split('.')[2]);
    /* eslint-disable-next-line */
  }, []);

  const setNewDate = date => {
    setDate(date);
    setYear(date.split('.')[2]);
  };
  const handleCalendarClick = () => {
    setPicker(true);
  };

  const closePicker = dateNew => {
    const newDate = `${dateNew.getUTCDate()}.${
      dateNew.getUTCMonth() + 1
    }.${dateNew.getUTCFullYear()}`;

    setDate(newDate);
    setYear(newDate.split('.')[2]);
    setPicker(false);
  };
  const contextValueBalance = {
    type,
    picker,
    handleCalendarClick,
    closePicker,
    date,
    setNewDate,
  };
  const typeToggle = e => {
    setType(`${e.target.title}`);
  };

  const onArrow = e => {
    typeToggle(e);
    return listRender ? setListRender(false) : setListRender(true);
  };
  const onBack = () => {
    setListRender(true);
  };

  const viewPort = useWindowDimensions();

  const day = new Date();

  const startDate = `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`;

  return (
    <contextProps.Provider value={contextValueBalance}>
      <Container>
        {loader && <Loader />}
        {viewPort.width >= 768 && (
          <>
            <div className={s.balanceContainer}>
              <div>{/* <Balance /> */}</div>
              <div>{/* <ToGoReport /> */}</div>
            </div>
            <div className={s.holst}>
              <div className={s.buttonContainer}>
                <button
                  className={`${s.buttonSpentIncome} ${
                    type === 'expense' && s.buttonSpentIncomeActive
                  }`}
                  onClick={typeToggle}
                  title="expense"
                >
                  РАСХОД
                </button>
                <button
                  className={`${s.buttonSpentIncome} ${
                    type === 'income' && s.buttonSpentIncomeActive
                  }`}
                  onClick={typeToggle}
                  title="income"
                >
                  ДОХОД
                </button>
              </div>
              <AddTransaction />
              <div className={s.dataContainer}>
                <TransactionHistoryList transactionType={type} date={date} />
                {viewPort.width > 1280 && <Summary year={year} />}
              </div>
            </div>
            <div className={s.containerSummary768}>
              {viewPort.width <= 1279 && viewPort.width > 768 && <Summary year={year} />}
            </div>
          </>
        )}
        {viewPort.width < 768 && (
          <>
            {listRender ? (
              <>
                <div className={s.holst}>{/* <ToGoReport /> */}</div>
                <div className={s.balanceContainer}>{/* <Balance /> */}</div>
                <Calendar
                  date={date}
                  handleCalendarClick={handleCalendarClick}
                  closePicker={closePicker}
                  picker={picker}
                />
                {/* <TransactionsListMobile transactionType={type} date={date} /> */}
                <div className={s.buttonContainer}>
                  <button
                    className={`${s.buttonExpense} ${
                      type === 'expense' && s.buttonSpentIncomeActive
                    }`}
                    onClick={onArrow}
                    title="expense"
                  >
                    РАСХОД
                  </button>
                  <button
                    className={`${s.buttonIncome} ${
                      type === 'income' && s.buttonSpentIncomeActive
                    }`}
                    onClick={onArrow}
                    title="income"
                  >
                    ДОХОД
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className={s.buttonArrowGoBack} onClick={onArrow}>
                  &#8592;
                </button>
                <AddTransaction onCloseForm={onBack} transactionType={type} date={date} />
              </>
            )}
          </>
        )}
      </Container>
    </contextProps.Provider>
  );
};

export default Wallet;

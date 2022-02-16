import 'react-datepicker/dist/react-datepicker.css';
// import './DatePicker.module.scss';

import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAddTransaction } from '../../redux/transaction/transactions-operations';
// import { getSelectedDate } from '../../redux/transaction/transactions-selectors';
// import { transactionsActions } from '../../redux/transaction';

// import calendarIcon from '../../images/transactionIcons/calendar.svg';
// import DatePicker from 'react-datepicker';

import CalendarPicker from './CalendarPicker';
import { buttonGroupStyles } from '../../styles/buttonGroupStyles';
import calculatorIcon from '../../images/transactionIcons/calculator.svg';
import Calculator from './Calculator/Calculator';
import expenseCategories from './expenseCategories.json';
import s from './Transactions.module.scss';
import { selectStyles } from '../../styles/selectStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Transaction({ categories, isIncome, placeholder, value }) {
  // const selectedDate = useSelector(getSelectedDate);
  // const [date, setDate] = useState(
  //   new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day),
  // );
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [calc, setCalc] = useState(false);
  const [sum, setSum] = useState('');

  // console.log(Date.parse(date));
  const dayCreate = date.getDate();
  const monthCreate = date.getMonth() + 1;
  const yearCreate = date.getFullYear();
  // console.log(dayCreate);
  // const monthCreate = date.getMonth() + 1;
  // const yearCreat = date.getFullYear();

  const changeDate = date => {
    setDate(date);
  };
  // console.log(typeof date);
  // const [selectedDay, setSelectedDay] = useState();

  // const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const isTablet = useMediaQuery(theme.breakpoints.only('tablet'));
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  // const stringifyDate = JSON.parse(JSON.stringify(date));
  const newTransaction = {
    category: category,
    // date: stringifyDate,
    sum: Number(sum),
    description: description,
  };

  const onClick = () => {
    console.log({
      ...newTransaction,
      idT: 123456789,
      transactionType: value,
      // date,
      dayCreate,
      monthCreate,
      yearCreate,
    });
    // console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    // dispatch(
    //   fetchAddTransaction({
    //     year,
    //     month,
    //     day,
    //     description,
    //     category,
    //     sum,
    //     isIncome,
    //   }),
    // );

    reset();
  };

  const reset = () => {
    setDate(new Date());
    setDescription('');
    setCategory('');
    setSum('');
  };

  // const handleChangeDate = data => {
  //   dispatch(
  //     transactionsActions.selectedDate({
  //       day: data.getDate(),
  //       month: data.getMonth() + 1,
  //       year: data.getFullYear(),
  //     }),
  //   );
  //   setDate(data);
  // };
  const closeCalc = result => {
    setSum(result);

    setCalc(false);
  };
  const handleCalcClick = () => {
    setCalc(true);
  };

  // useEffect(() => {
  //   setValue('categories', placeholderCategories.data);
  // }, [expenseCategories, setValue]);

  // useEffect(() => {
  //   dateFinder(setDate);
  //   setValue('date', selectedDate);
  // }, [setDate, setValue, dateFinder]);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapInputs}>
        <div className={s.box}>
          <CalendarPicker date={date} changeDate={changeDate} />
        </div>

        <input
          className={s.desc}
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
        />

        <FormControl>
          <InputLabel sx={{ fontSize: '12px' }}>Категория</InputLabel>
          <Select
            sx={
              isMobile
                ? {
                    width: '280px',
                    marginBottom: '30px',
                    borderRadius: '0 0 16px 0',
                    border: '2px solid #FFF',
                    fontSize: '12px',
                  }
                : isTablet
                ? {
                    width: '168px',
                    marginBottom: 0,
                    borderRight: 'none',
                    borderRadius: '0',
                    fontSize: '12px',
                  }
                : selectStyles
            }
            id="select"
            name="category"
            value={category}
            onChange={handleChange}
            required
          >
            {categories.map(option => (
              <MenuItem
                key={option.value}
                value={option.value}
                id={option.value}
                style={{ fontSize: '12px' }}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <label className={s.sumWrap}>
          <input
            className={s.sum}
            type="number"
            name="sum"
            value={sum}
            onChange={handleChange}
            placeholder="0.00 грн"
            min="0"
            // step="1"
            pattern="^\d{1,3}(\s\d{3})*(\.\d+)?$"
            required
            autoComplete="off"
          />
          <img
            onClick={handleCalcClick}
            className={s.iconCalc}
            src={calculatorIcon}
            alt="калькулятор"
          />
          {calc && <Calculator onCloseCalculator={closeCalc} />}
        </label>
      </div>
      <ButtonGroup color="secondary" variant="outlined" sx={buttonGroupStyles}>
        <Button type="submit" onClick={onClick}>
          Ввод
        </Button>
        <Button type="button" onClick={reset}>
          Очистить
        </Button>
      </ButtonGroup>
    </form>
  );
}

Transaction.defaultProps = {
  // isIncome: false,
  categories: expenseCategories,
  placeholder: 'Описание расхода',
  selectLabel: 'Категория товара',
};

export default Transaction;
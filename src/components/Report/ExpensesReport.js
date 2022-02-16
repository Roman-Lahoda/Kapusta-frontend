import { useSelector } from 'react-redux';
import { useState } from 'react';
import s from './Report.module.scss';
import sprite from '../../images/spriteReport.svg';
import transactionSelectors from '../../reduxV2/transaction/transaction-selector';
// <<<<<<< HEAD
import Diagram from '../Diagram/Diagram';

// export default function ExpensesReport() {
//   const report = useSelector(transactionSelectors.getReport);

// const foodTotalSum = report?.expense?.food?.reduce((a, b) => a + b.sum, 0);

// report.expense.map(el => {
//   if (el.length === 0) {
//     return null;
//   }
//   return (
//     <li className={s.item}>
//       <p>{foodTotalSum}</p>
//       <div className={s.picBox}>
//         <svg width="59" height="46">
//           <use href={`${sprite}#icon-products`}></use>
//         </svg>
//       </div>
//       <p>{el[0].description}</p>
//     </li>
//   );
// });
// =======
// import Diagram from '../Diagram';

export default function ExpensesReport() {
  const [currentCategory, setCurrentCategory] = useState('food');
  console.log(
    '🚀 ~ file: ExpensesReport.js ~ line 35 ~ ExpensesReport ~ currentCategory',
    currentCategory,
  );
  const report = useSelector(transactionSelectors.getReport);

  const foodTotalSum = report?.expense?.food?.reduce((a, b) => a + b.sum, 0);
  // >>>>>>> dev

  const alcoholTotalSum = report?.expense?.alcohol?.reduce((a, b) => a + b.sum, 0);
  // <<<<<<< HEAD
  // console.log(alcoholTotalSum);
  // const otherTotalSum = report?.expense?.other?.reduce((a, b) => a + b.sum, 0);
  // console.log(alcoholTotalSum);

  // const expenseArray = report?.expense;

  // const selectionCategory = (event) => {
  //   if (event.target.nodeName== 'LI') {
  //     setCurrentCategory (event.target.dataset.category)
  //   }
  // }

  //   return (
  //     <>
  //       <ul className={s.expensesCategories} onClick={selectionCategory}>
  //         <li className={s.item} data-category = 'food'>
  //           <p>{foodTotalSum}</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-products`}></use>
  //             </svg>
  //           </div>
  //           <p>ПРОДУКТЫ</p>
  //         </li>
  //         <li className={s.item} data-category = 'alcohol'>
  //           <p>{alcoholTotalSum}</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-cocktail`}></use>
  //             </svg>
  //           </div>
  //           <p>АЛКОГОЛЬ</p>
  //         </li>
  //         <li className={s.item}  data-category = 'entertainment'>
  //           <p>800.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-kite`}></use>
  //             </svg>
  //           </div>
  //           <p>РАЗВЛЕЧЕНИЯ</p>
  //         </li>
  //         <svg className={s.expBorder}></svg>
  //         <li className={s.item} data-category = 'health'>
  //           <p>900.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-health`}></use>
  //             </svg>
  //           </div>
  //           <p>ЗДОРОВЬЕ</p>
  //         </li>
  //         <li className={s.item}>
  //           <p>2 000.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-car`}></use>
  //             </svg>
  //           </div>
  //           <p>ТРАНСПОРТ</p>
  //         </li>
  //         <li className={s.item} data-category = 'transport'>
  //           <p>1 500.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-couch`}></use>
  //             </svg>
  //           </div>
  //           <p>ВСЕ ДЛЯ ДОМА</p>
  //         </li>
  //         <svg className={s.expBorder}></svg>
  //         <li className={s.item} data-category = 'technics'>
  //           <p>800.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-tools`}></use>
  //             </svg>
  //           </div>
  //           <p>ТЕХНИКА</p>
  //         </li>
  //         <li className={s.item} data-category = 'communal'>
  //           <p>2 200.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-invoice`}></use>
  //             </svg>
  //           </div>
  //           <p>КОММУНАЛКА, СВЯЗЬ</p>
  //         </li>
  //         <li className={s.item} data-category = 'sport'>
  //           <p>1 800.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-hobby`}></use>
  //             </svg>
  //           </div>
  //           <p>СПОРТ, ХОББИ</p>
  //         </li>
  //         <svg className={s.expBorder}></svg>
  //         <li className={s.item} data-category = 'education'>
  //           <p>2 400.00</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-education`}></use>
  //             </svg>
  //           </div>
  //           <p>ОБРАЗОВАНИЕ</p>
  //         </li>
  //         <li className={s.item} data-category = 'other'>
  //           <p>{otherTotalSum}</p>
  //           <div className={s.picBox}>
  //             <svg width="59" height="46">
  //               <use href={`${sprite}#icon-ufo`}></use>
  //             </svg>
  //           </div>
  //           <p>ПРОЧЕЕ</p>
  //         </li>
  //         <svg className={s.expBorder}></svg>
  //       </ul>

  //       <section className={s.expensesDiargBg}>
  //         { expenseArray &&  <Diagram arrayOfData= {expenseArray[currentCategory] } /> }
  //       </section>
  //     </>
  // =======
  const entertainmentTotalSum = report?.expense?.entertainment?.reduce((a, b) => a + b.sum, 0);
  const housingTotalSum = report?.expense?.housing?.reduce((a, b) => a + b.sum, 0);
  const technicsTotalSum = report?.expense?.technics?.reduce((a, b) => a + b.sum, 0);
  const communalTotalSum = report?.expense?.communal?.reduce((a, b) => a + b.sum, 0);
  const sportTotalSum = report?.expense?.sport?.reduce((a, b) => a + b.sum, 0);
  const educationTotalSum = report?.expense?.education?.reduce((a, b) => a + b.sum, 0);
  const healthTotalSum = report?.expense?.health?.reduce((a, b) => a + b.sum, 0);
  const transportTotalSum = report?.expense?.transport?.reduce((a, b) => a + b.sum, 0);
  const otherTotalSum = report?.expense?.transport?.reduce((a, b) => a + b.sum, 0);

  const selectionCategory = event => {
    if (event.target.nodeName === 'LI') {
      setCurrentCategory(event.target.dataset.category);
    }
  };
  const expenseArray = report?.expense;
  return (
    <div>
      <div className={s.transactionsCategories}>
        <ul className={s.expensesCategories} onClick={selectionCategory}>
          {foodTotalSum ? (
            <li className={s.item} data-category="food">
              <p>{new Intl.NumberFormat('ru-RU').format(foodTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-products`}></use>
                </svg>
              </div>
              <p>ПРОДУКТЫ</p>
            </li>
          ) : null}
          {alcoholTotalSum ? (
            <li className={s.item} data-category="alcohol">
              <p>{new Intl.NumberFormat('ru-RU').format(alcoholTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-cocktail`}></use>
                </svg>
              </div>
              <p>АЛКОГОЛЬ</p>
            </li>
          ) : null}
          {entertainmentTotalSum ? (
            <li className={s.item} data-category="entertainment">
              <p>{new Intl.NumberFormat('ru-RU').format(entertainmentTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-kite`}></use>
                </svg>
              </div>
              <p>РАЗВЛЕЧЕНИЯ</p>
            </li>
          ) : null}
          <svg className={s.expBorder}></svg>
          {healthTotalSum ? (
            <li className={s.item} data-category="health">
              <p>{new Intl.NumberFormat('ru-RU').format(healthTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-health`}></use>
                </svg>
              </div>
              <p>ЗДОРОВЬЕ</p>
            </li>
          ) : null}
          {transportTotalSum ? (
            <li className={s.item} data-category="transport">
              <p>{new Intl.NumberFormat('ru-RU').format(transportTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-car`}></use>
                </svg>
              </div>
              <p>ТРАНСПОРТ</p>
            </li>
          ) : null}
          {housingTotalSum ? (
            <li className={s.item} data-category="housing">
              <p>{new Intl.NumberFormat('ru-RU').format(housingTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-couch`}></use>
                </svg>
              </div>
              <p>ВСЕ ДЛЯ ДОМА</p>
            </li>
          ) : null}
          <svg className={s.expBorder}></svg>
          {technicsTotalSum ? (
            <li className={s.item} data-category="technics">
              <p>{new Intl.NumberFormat('ru-RU').format(technicsTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-tools`}></use>
                </svg>
              </div>
              <p>ТЕХНИКА</p>
            </li>
          ) : null}
          {communalTotalSum ? (
            <li className={s.item} data-category="communal">
              <p>{new Intl.NumberFormat('ru-RU').format(communalTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-invoice`}></use>
                </svg>
              </div>
              <p>КОММУНАЛКА, СВЯЗЬ</p>
            </li>
          ) : null}
          {sportTotalSum ? (
            <li className={s.item} data-category="sport">
              <p>{new Intl.NumberFormat('ru-RU').format(sportTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-hobby`}></use>
                </svg>
              </div>
              <p>СПОРТ, ХОББИ</p>
            </li>
          ) : null}
          <svg className={s.expBorder}></svg>
          {educationTotalSum ? (
            <li className={s.item} data-category="education">
              <p>{new Intl.NumberFormat('ru-RU').format(educationTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-education`}></use>
                </svg>
              </div>
              <p>ОБРАЗОВАНИЕ</p>
            </li>
          ) : null}
          {otherTotalSum ? (
            <li className={s.item} data-category="other">
              <p>{new Intl.NumberFormat('ru-RU').format(otherTotalSum)}.00</p>
              <div className={s.picBox}>
                <svg width="59" height="46">
                  <use href={`${sprite}#icon-ufo`}></use>
                </svg>
              </div>
              <p>ПРОЧЕЕ</p>
            </li>
          ) : null}
          <svg className={s.expBorder}></svg>
        </ul>
      </div>
      {/* <article className={s.diargBg}>
        <Diagram />
      </article> */}
      <section className={s.expensesDiargBg}>
        {expenseArray && <Diagram arrayOfData={expenseArray[currentCategory]} />}
      </section>
    </div>
    // >>>>>>> dev
  );
}

import Header from './components/header'
import Socials from './components/socials'
import "@fontsource/arvo"; // Defaults to weight 400.

import { getDataFromSheets } from './api/sheets';
import type { SheetItem } from './api/sheets';
import type { GetStaticProps } from 'next';

function selectColumns(rows: any[][], nameCol: number, priceCol: number) {
  if (rows && rows.length > 0) {
    const sheetData: SheetItem[] = rows.map((row) => ({
        name: row[nameCol],
        price: row[priceCol],
    }));
    sheetData.shift(); // remove header
    return sheetData;
  } else {
    return [];
  }
}

// function to make table with either 4 or 2 columns depending on screen size
function makeTable(data: SheetItem[], numCols: number) {
  const table = [];
  const numRows = Math.ceil(data.length / numCols);
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const index = i * numCols + j;
      if (index < data.length) {
        row.push(
          <td key={index+'a'} className="uppercase">
            {data[index].name}
          </td>
        );
        row.push(
          <td key={index+'b'}>
            {data[index].price}
          </td>
        );
      } else {
        row.push(<td key={index+'c'}></td>);
      }
    }
    table.push(<tr key={i}>{row}</tr>);
  }
  return table;
}



export default function FoodAndDrink({ sheet }: { sheet: any[][]} ) {
  // const data = selectColumns(0, 1)
  const drinkData = selectColumns(sheet, 0, 1);
  const drinkTableRows = makeTable(drinkData, 2);
  // console.log(drinkTableRows)

  const foodData = selectColumns(sheet, 3, 4);
  const foodTableRows = makeTable(foodData, 2);

  const cakeData = selectColumns(sheet, 6, 7);
  const cakeTableRows = makeTable(cakeData, 1);

  const donutData = selectColumns(sheet, 9, 10);
  const donutTableRows = makeTable(donutData, 2);

  return (
    <>
    <Header />
    <main className="">
      <div className="flex flex-col mx-auto bg-zinc-50 text-zinc-800 p-2 md:p-4 justify-start max-w-2xl w-full gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-center">Drinks ☕</h2>
            <table className="table-auto w-full border-separate border-spacing-y-2 border-spacing-x-8 bg-white shadow-md rounded-md">
              <tbody>
                {drinkTableRows}
              </tbody>
            </table>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-center">Food 🍴</h2>
          <table className="table-auto w-full border-separate border-spacing-y-2 border-spacing-x-8 bg-white shadow-md rounded-md">
              <tbody>
                {foodTableRows}
              </tbody>
            </table>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-center">Cakes to Order 🍰</h2>
          <table className="table-fixed text-center m-auto w-2/3 border-separate bg-white shadow-md rounded-md">
              <tbody>
                {cakeTableRows}
              </tbody>
            </table>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-center">Donuts 🍩</h2>
          <table className="table-auto w-full border-separate border-spacing-y-2 border-spacing-x-8 bg-white shadow-md rounded-md">
              <tbody>
                {donutTableRows}
              </tbody>
            </table>
        </div>
        <Socials />
      </div>
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (_context) => {
  let sheet = await getDataFromSheets('Menus');
  // const data: SheetItem[] = sheet.slice(1, sheet.length); // remove sheet header and first row
  return {
    props: {
      sheet: sheet, 
    },
    revalidate: 1, // In seconds
  };
}
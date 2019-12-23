import React from 'react';
import HomePage from './component/home';
import StockTable from './component/stockTable';
import LoginPage from'./component/login';
import StockHistoryTable from'./component/stockHisTable';
import ImportPage from './component/import';
import ExportPage from './component/export';


function App() {
  return (
    <div>
      <StockTable/>
    </div>
  );
}

export default App;

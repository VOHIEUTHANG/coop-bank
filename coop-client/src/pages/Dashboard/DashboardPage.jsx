import React from 'react';
import { exportExcel as exportAffiliateUnit } from 'services/affiliate-unit.service';
import { exportExcel as exportRepresentative } from 'services/representative.service';
import { exportExcel as exportContract } from 'services/contract.service';
import FormExportItem from './components/FormItem';

const exportDataList = [
  {
    title: 'Tổng hợp đơn vị liên kết',
    exportFunction: exportAffiliateUnit,
  },
  {
    title: 'Tổng hợp ban lãnh đạo',
    exportFunction: exportRepresentative,
  },
  {
    title: 'Tổng hợp hợp đồng vay vốn',
    exportFunction: exportContract,
  },
];

const DashboardPage = () => {
  return (
    <div className='cb_main_wrapp'>
      <div className='cb_row'>
        {exportDataList.map((form) => (
          <div key={form.title} className='cb_col_4' style={{ padding: 7 }}>
            <FormExportItem exportFunction={form.exportFunction} title={form.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

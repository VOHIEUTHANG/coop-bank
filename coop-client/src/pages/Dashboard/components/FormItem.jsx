import FormItem from 'components/shared/FormControl/FormItem';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormDateRange from 'components/shared/FormControl/FormDateRange';
import styled from 'styled-components';
import Button from 'components/shared/Button';
import moment from 'moment';
import { showToast } from 'utils/helpers';
import PropTypes from 'prop-types';

const ExportItemStyled = styled.div`
  padding: 20px;
  background: var(--grayColor);
  border: 1px solid #ececec;
  border-radius: 4px;

  .title {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .btn {
    margin: 10px auto;
  }

  .center-container {
    display: flex;
  }
`;

const FormExportItem = ({ title, exportFunction }) => {
  const methods = useForm();

  const exportHandler = (formValues) => {
    exportFunction(formValues)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response?.data]));
        const link = document.createElement('a');
        link.href = url;
        const configDate = moment().format('DDMMYYYY');
        link.setAttribute('download', `${title.toLowerCase()}_${configDate}.xlsx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        showToast.error(error?.message || 'Lỗi xuất tập tin.');
      });
  };

  return (
    <FormProvider {...methods}>
      <ExportItemStyled>
        <div className='title'>{title}</div>
        <FormItem label=''>
          <FormDateRange
            allowClear={true}
            fieldStart={'created_date_from'}
            fieldEnd={'created_date_to'}
            placeholder={['Từ ngày', 'Đến ngày']}
            format={'DD/MM/YYYY'}
          />
        </FormItem>
        <div className='center-container'>
          <Button className='btn' onClick={methods.handleSubmit(exportHandler)} icon='ti-export' content='Xuất mẫu' />
        </div>
      </ExportItemStyled>
    </FormProvider>
  );
};

FormItem.propTypes = {
  title: PropTypes.string,
  exportFunction: PropTypes.func,
};

export default FormExportItem;

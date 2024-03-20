import FormItem from 'components/shared/FormControl/FormItem';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { exportForm } from 'services/contract.service';
import Accordion from 'components/shared/Accordion';
import { Spin } from 'antd';
import moment from 'moment';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { handleToastError } from 'utils';
import { EXPORT_TYPE, EXPORT_TYPE_OPTIONS } from 'pages/Contract/utils/constants';
import styled from 'styled-components';
import DataTable from 'components/shared/DataTable';

import { getListByUser } from 'services/bank-representative.service';
import { PositionOptions } from 'pages/BankRepresentative/utils/constants';
import { showToast } from 'utils/helpers';

const DataTableStyled = styled.div`
  margin-bottom: 10px;
  .cb_row.cb_mt_2.cb_mb_2.cb_align_items_center {
    margin: 0;
  }
`;

const FormRadioGroupStyled = styled.div`
  .cb_radio {
    color: #19376d;
    font-weight: 500;
  }
`;

function ExportDoc({ closeModal, contractId, defaultExportData, refreshData }) {
  const methods = useForm({
    defaultValues: defaultExportData || {
      export_type: EXPORT_TYPE.CUSTOMER_SURVEY_FORM,
    },
  });
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);
  const [representatives, setRepresentatives] = useState([]);

  useEffect(() => {
    getListByUser().then(setRepresentatives);
  }, []);

  const onSubmit = async (values) => {
    if (!values.bank_representative_id && representatives?.length > 0) {
      return showToast.warning('Vui lòng chọn người đại diện !');
    }

    const selectedExportType = EXPORT_TYPE_OPTIONS.find((type) => type.value === values.export_type);
    setLoading(true);

    exportForm(contractId, values)
      .then((response) => {
        closeModal(false);
        refreshData();
        const url = window.URL.createObjectURL(new Blob([response?.data]));
        const link = document.createElement('a');
        link.href = url;
        const configDate = moment().format('DDMMYYYY');
        link.setAttribute('download', `${selectedExportType.file_name}_${configDate}.docx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => handleToastError(err))
      .finally(() => setLoading(false));
  };

  const columns = [
    {
      header: 'Tên người đại diện',
      classNameHeader: 'cb_text_center',
      accessor: 'bank_representative_name',
    },
    {
      header: 'Số điện thoại',
      classNameHeader: 'cb_text_center',
      accessor: 'phone_number',
    },
    {
      header: 'Chức vụ',
      classNameHeader: 'cb_text_center',
      classNameBody: 'cb_text_center',
      formatter: (item, index) => (
        <span>
          {PositionOptions.find((position) => position.value === item.bank_representative_position)?.label ||
            'Không xác định'}
        </span>
      ),
    },
    {
      header: 'Căn cước công dân',
      classNameHeader: 'cb_text_center',
      accessor: 'id_number',
    },
  ];

  return (
    <FormProvider {...methods}>
      <div>
        <div className='cb_modal cb_modal_open ' id='cb_calculate_modal'>
          <div className='cb_modal_container cb_w900'>
            <div className='cb_title_modal'>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {loading && <Spin />}
                <h3>Thông tin xuất biểu mẫu</h3>
              </div>
              <span className='cb_close_modal fi fi-rr-cross-small' onClick={() => closeModal(false)} />
            </div>
            <FormRadioGroupStyled className='cb_main_modal'>
              <Accordion>
                <div className='cb_row'>
                  {representatives?.length > 0 && (
                    <React.Fragment>
                      <span style={{ marginLeft: '6px' }}> Chọn người đại diện phòng giao dịch</span>
                      <div className='cb_col_12'>
                        <DataTableStyled>
                          <DataTable
                            defaultDataSelect={representatives?.length > 0 ? [representatives[0]] : []}
                            uniqueSelect
                            onChangeSelect={(dataSelect) => {
                              methods.setValue('bank_representative_id', dataSelect?.[0]?.bank_representative_id);
                            }}
                            hiddenDeleteClick
                            noSelect={false}
                            noPaging
                            actions={[]}
                            columns={columns}
                            data={representatives}
                          />
                        </DataTableStyled>
                      </div>
                    </React.Fragment>
                  )}

                  <FormItem label='In các biểu mẫu' isRequired className='cb_col_12'>
                    <FormRadioGroup
                      style={{ marginBottom: '10px', marginTop: '2px', width: '33%' }}
                      custom
                      field='export_type'
                      list={EXPORT_TYPE_OPTIONS}
                      validation={{ required: 'Loại giấy tờ là bắt buộc' }}
                    />
                  </FormItem>
                </div>
              </Accordion>
            </FormRadioGroupStyled>
            <div
              className='cb_footer_modal cb_flex cb_justify_content_right cb_align_items_center'
              style={{
                position: 'sticky',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'white',
                paddingBottom: '20px',
                boxShadow: '0 -10px 20px 0px rgba(212, 161, 161, 0.25)',
              }}>
              <button type='button' className='cb_btn cb_btn_danger' onClick={() => closeModal(false)}>
                Hủy
              </button>
              <button
                type='button'
                className='cb_btn  cb_btn_success'
                onClick={(...event) => {
                  if (!loading) {
                    return handleSubmit(onSubmit)(...event);
                  }
                }}>
                <span className='ti-printer' /> Xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default ExportDoc;

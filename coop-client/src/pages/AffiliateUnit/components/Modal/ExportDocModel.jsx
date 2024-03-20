import FormItem from 'components/shared/FormControl/FormItem';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { exportForm } from 'services/affiliate-unit.service';
import Accordion from 'components/shared/Accordion';
import { Divider, Spin } from 'antd';
import moment from 'moment';
import FormRadioGroup from 'components/shared/FormControl/FormRadioGroup';
import { handleToastError } from 'utils';
import { EXPORT_TYPE, EXPORT_TYPE_OPTIONS } from 'pages/AffiliateUnit/utils/constants';
import DataTable from 'components/shared/DataTable';
import styled from 'styled-components';
import { showToast } from 'utils/helpers';
import FormTextArea from 'components/shared/FormControl/FormTextArea';

const DataTableStyled = styled.div`
  .cb_row.cb_mt_2.cb_mb_2.cb_align_items_center {
    margin: 0;
  }
`;

function ExportDoc({ setShowModal, affiliateUnit }) {
  const originMethods = useFormContext();
  const methods = useForm({
    defaultValues: {
      export_type: EXPORT_TYPE.AFFILATE_CONTRACT,
    },
  });
  const { handleSubmit } = methods;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    const selectedExportType = EXPORT_TYPE_OPTIONS.find((type) => type.value === values.export_type);
    setLoading(true);
    exportForm(affiliateUnit.affiliate_unit_id, values)
      .then((response) => {
        setShowModal(false);
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
      accessor: 'representative_name',
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
      accessor: 'representative_position',
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
              <span className='cb_close_modal fi fi-rr-cross-small' onClick={() => setShowModal(false)} />
            </div>
            <div className='cb_main_modal'>
              <Accordion>
                <div className='cb_row'>
                  <FormItem label='Ý kiến của cán bộ kiểm tra' className='cb_col_12'>
                    <FormTextArea field='branch_note' placeholder='Nhập ý kiến của cán bộ kiểm tra' />
                  </FormItem>

                  <FormItem label='Ý kiến của đơn vị vay vốn' className='cb_col_12'>
                    <FormTextArea field='affiliate_note' placeholder='Nhập ý kiến của đơn vị vay vốn' />
                  </FormItem>

                  <div className='cb_col_12'>
                    <DataTableStyled>
                      <DataTable
                        defaultDataSelect={
                          originMethods.watch('representatives')?.length > 0
                            ? [originMethods.watch('representatives')[0]]
                            : []
                        }
                        uniqueSelect
                        onChangeSelect={(dataSelect) => {
                          methods.setValue('representative_id', dataSelect?.[0]?.representative_id);
                        }}
                        hiddenDeleteClick
                        noSelect={false}
                        noPaging
                        actions={[]}
                        columns={columns}
                        data={originMethods.watch('representatives') || []}
                      />
                    </DataTableStyled>
                  </div>

                  <Divider />
                  <FormItem label='In các biểu mẫu' isRequired className='cb_col_12'>
                    <FormRadioGroup
                      custom
                      style={{ marginBottom: '8px', marginTop: '2px' }}
                      field='export_type'
                      list={EXPORT_TYPE_OPTIONS}
                      validation={{ required: 'Loại giấy tờ là bắt buộc' }}
                    />
                  </FormItem>
                </div>
              </Accordion>
            </div>
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
              <button type='button' className='cb_btn cb_btn_danger' onClick={() => setShowModal(false)}>
                Hủy
              </button>
              <button
                type='button'
                className='cb_btn  cb_btn_success'
                onClick={(...event) => {
                  if (!methods.watch('representative_id')) {
                    return showToast.warning('Vui lòng chọn người đại diện đơn vị liên kết !');
                  }
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

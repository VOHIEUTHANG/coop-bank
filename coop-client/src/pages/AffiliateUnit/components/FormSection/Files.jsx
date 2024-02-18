import React, { useCallback, useState } from 'react';

import Accordion from 'components/shared/Accordion/index';
import { useFormContext } from 'react-hook-form';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { getBase64 } from 'utils/helpers';
import styled from 'styled-components';
import PdfImage from 'assets/images/pdf.png';
import { downloadPDF } from 'utils';

const CloseBtnStyle = styled.span`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease;
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

const Files = ({ disabled, title, id }) => {
  const methods = useFormContext();
  const { watch, setValue } = methods;
  const [fileName, setFileName] = useState();

  const renderFile = useCallback(
    (field) => {
      if (watch(field)) {
        return (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
              alt='Bảng lương'
              style={{ width: '100%', height: '100%' }}
              src={PdfImage}
              onClick={() => {
                if (!disabled) {
                  downloadPDF(watch(field), fileName);
                }
              }}
            />
            <CloseBtnStyle
              onClick={() => {
                if (!disabled) {
                  setTimeout(() => {
                    setValue(field, null);
                  }, 100);
                }
              }}
              style={{ visibility: disabled ? 'hidden' : 'visible' }}>
              <CloseOutlined style={{ fontSize: '16px', color: 'white' }} />
            </CloseBtnStyle>
          </div>
        );
      }
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '1px dashed #ccc',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <PlusOutlined />
        </div>
      );
    },
    [watch('id_front_image'), watch('id_back_image'), fileName],
  );

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_12'>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image' style={{ width: '100px', height: '100px' }}>
                {!methods.watch('affiliate_unit_paycheck') && (
                  <input
                    accept='application/pdf'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('affiliate_unit_paycheck', base64);
                      setFileName(_.target.files[0]?.name);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderFile('affiliate_unit_paycheck')}
              </label>
              <p>File bảng lương (pdf)</p>
            </div>
          </div>
        </div>

        <div class='cb_col_6'></div>
      </div>
    </Accordion>
  );
};

export default Files;

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

  const renderFile = useCallback(
    (field) => {
      if (watch(field)) {
        return (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img
              alt=''
              style={{ width: '100%', height: '100%' }}
              src={PdfImage}
              onClick={() => {
                if (!disabled) {
                  downloadPDF(watch(field), field);
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
    [watch('salary_file'), watch('marriage_file'), watch('appoint_file')],
  );

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_12' style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image' style={{ width: '100px', height: '100px' }}>
                {!methods.watch('salary_file') && (
                  <input
                    accept='application/pdf'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('salary_file', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderFile('salary_file')}
              </label>
              <p>Quyết định nâng lương</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image' style={{ width: '100px', height: '100px' }}>
                {!methods.watch('marriage_file') && (
                  <input
                    accept='application/pdf'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('marriage_file', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderFile('marriage_file')}
              </label>
              <p>Giấy đăng ký kết hôn</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image' style={{ width: '100px', height: '100px' }}>
                {!methods.watch('appoint_file') && (
                  <input
                    accept='application/pdf'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('appoint_file', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderFile('appoint_file')}
              </label>
              <p>Quyết định bổ nhiệm</p>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default Files;

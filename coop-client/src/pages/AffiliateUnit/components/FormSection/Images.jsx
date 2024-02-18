import React, { useCallback } from 'react';

import Accordion from 'components/shared/Accordion/index';
import { useFormContext } from 'react-hook-form';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { getBase64 } from 'utils/helpers';
import { Image } from 'antd';
import styled from 'styled-components';

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

const Images = ({ disabled, title, id }) => {
  const methods = useFormContext();
  const { watch } = methods;

  const renderAvatar = useCallback(
    (field) => {
      if (methods.watch(field)) {
        return (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image width={'100%'} height={'100%'} src={methods.watch(field)} />
            <CloseBtnStyle
              onClick={() => {
                if (!disabled) {
                  setTimeout(() => {
                    methods.setValue(field, null);
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
    [watch('affiliate_unit_image_1'), watch('affiliate_unit_image_2')],
  );

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_12'>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image'>
                {!methods.watch('affiliate_unit_image_1') && (
                  <input
                    accept='image/*'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('affiliate_unit_image_1', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderAvatar('affiliate_unit_image_1')}
              </label>
            </div>

            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image'>
                {!methods.watch('affiliate_unit_image_2') && (
                  <input
                    accept='image/*'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('affiliate_unit_image_2', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderAvatar('affiliate_unit_image_2')}
              </label>
            </div>
          </div>
        </div>

        <div class='cb_col_6'></div>
      </div>
    </Accordion>
  );
};

export default Images;

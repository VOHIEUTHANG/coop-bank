import React, { useCallback } from 'react';

import Accordion from 'components/shared/Accordion/index';
import FormItem from 'components/shared/FormControl/FormItem';
import FormInput from 'components/shared/FormControl/FormInput';
import FormDatePicker from 'components/shared/FormControl/FormDate';
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

const BranchInfo = ({ disabled, title, id }) => {
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
    [watch('id_front_image'), watch('id_back_image')],
  );

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div class='cb_col_6'>
          <FormItem label='Số CCCD' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='id_number'
              placeholder='Nhập số CCCD'
              validation={{
                required: 'Số CCCD là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div class='cb_col_6'>
          <FormItem label='Cơ quan cấp CCCD' isRequired disabled={disabled}>
            <FormInput
              type='text'
              field='id_issued_by'
              placeholder='Nhập cơ quan cấp CCCD'
              validation={{
                required: 'Cơ quan cấp là bắt buộc',
              }}
            />
          </FormItem>
        </div>

        <div className='cb_col_12'>
          <div className='cb_row'>
            <div class='cb_col_6'>
              <FormItem label='Ngày cấp CCCD' isRequired disabled={disabled}>
                <FormDatePicker
                  format={'DD/MM/YYYY'}
                  field='id_issued_date'
                  validation={{
                    required: 'Ngày cấp căn cước công dân là bắt buộc.',
                  }}
                  placeholder={'dd/mm/yyyy'}
                  style={{
                    width: '100%',
                  }}
                  bordered={false}
                  allowClear
                />
              </FormItem>
            </div>
          </div>
        </div>

        <div class='cb_col_12'>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image'>
                {!methods.watch('id_front_image') && (
                  <input
                    accept='image/*'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('id_front_image', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderAvatar('id_front_image')}
              </label>
              <p>Ảnh CCCD mặt trước.</p>
            </div>

            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image'>
                {!methods.watch('id_back_image') && (
                  <input
                    accept='image/*'
                    type='file'
                    onChange={async (_) => {
                      const base64 = await getBase64(_.target.files[0]);
                      methods.setValue('id_back_image', base64);
                    }}
                    disabled={disabled}
                  />
                )}
                {renderAvatar('id_back_image')}
              </label>
              <p>Ảnh CCCD mặt sau.</p>
            </div>
          </div>
        </div>

        <div class='cb_col_6'></div>
      </div>
    </Accordion>
  );
};

export default BranchInfo;

import React, { useCallback } from 'react';

import Accordion from 'components/shared/Accordion/index';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { getBase64 } from 'utils/helpers';
import styled from 'styled-components';
import PdfImage from 'assets/images/pdf.png';
import { downloadPDF } from 'utils';
import { Tooltip } from 'antd';

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
  const { control } = methods;
  const { remove, fields, append } = useFieldArray({
    control,
    name: 'document_files',
  });

  const renderFile = useCallback(
    (file, index) => {
      if (file) {
        return (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Tooltip title={`${file.document_file_name}.${file.document_file_extension}`}>
              <img
                alt='File'
                style={{ width: '100%', height: '100%' }}
                src={PdfImage}
                onClick={() => {
                  downloadPDF(file.document_file_url, `${file.document_file_name}.${file.document_file_extension}`);
                }}
              />
            </Tooltip>
            <CloseBtnStyle
              onClick={() => {
                if (!disabled) {
                  remove(index);
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
    [disabled, remove],
  );

  return (
    <Accordion title={title} id={id}>
      <div className='cb_row'>
        <div className='cb_col_12'>
          <div style={{ display: 'flex', gap: '15px' }}>
            {fields?.map((file, index) => {
              return (
                <div className='cb_load_image cb_mb_2 cb_text_center' key={index}>
                  <label className='cb_choose_image' style={{ width: '100px', height: '100px' }}>
                    {!file?.document_file_url && (
                      <input
                        accept='application/pdf'
                        type='file'
                        onChange={async (_) => {
                          const fileItem = _.target.files[0];
                          if (fileItem) {
                            const base64 = await getBase64(fileItem);
                            const file = {
                              document_file_url: base64,
                              document_file_extension: fileItem.name.slice(fileItem.name.lastIndexOf('.') + 1),
                              document_file_name: fileItem.name.slice(0, fileItem.name.lastIndexOf('.')),
                            };
                            methods.setValue(`document_files.${index}`, file);
                          }
                        }}
                        disabled={disabled}
                      />
                    )}
                    {renderFile(file, index)}
                  </label>
                  <p
                    style={{
                      maxWidth: '110px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                    {file.document_file_name}
                  </p>
                </div>
              );
            })}
            <div className='cb_load_image cb_mb_2 cb_text_center'>
              <label className='cb_choose_image' style={{ width: '100px', height: '100px' }}>
                <input
                  accept='application/pdf'
                  type='file'
                  onChange={async (_) => {
                    const fileItem = _.target.files[0];
                    if (fileItem) {
                      const base64 = await getBase64(fileItem);

                      const file = {
                        document_file_url: base64,
                        document_file_extension: fileItem.name.slice(fileItem.name.lastIndexOf('.') + 1),
                        document_file_name: fileItem.name.slice(0, fileItem.name.lastIndexOf('.')),
                      };

                      append(file);
                    }
                  }}
                  disabled={disabled}
                />
                {renderFile()}
              </label>
            </div>
          </div>
        </div>

        <div className='cb_col_6'></div>
      </div>
    </Accordion>
  );
};

export default Files;

import React, { useCallback, useState, useEffect } from 'react';
import { defaultPaging, defaultParams } from 'utils/helpers';
import CustomerFilter from './Section/Filter';
import BankRepresentativeTable from './Section/Table';
import { useFormContext } from 'react-hook-form';
import { getList } from 'services/bank-representative.service';

import styled from 'styled-components';

const ModalWrapper = styled.div`
  .cb_modal_wrapper {
    max-height: 80vh;
    max-width: 80vw;
  }
`;

const AddRepresentativeModal = ({ open, onClose }) => {
  const methods = useFormContext();

  const [params, setParams] = useState(defaultParams);
  const [dataItem, setDataItem] = useState(defaultPaging);
  const [loading, setLoading] = useState(true);
  const [selectedList, setSelectedList] = useState([]);

  const { items = [], itemsPerPage, page, totalItems, totalPages } = dataItem;

  const loadData = useCallback(async () => {
    setLoading(true);
    getList(params)
      .then(setDataItem)
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onChange = (params) => {
    setParams((prev) => ({ ...prev, ...params }));
  };

  return (
    <ModalWrapper>
      <div className={`cb_modal ${open ? 'cb_modal_open' : ''}`} id='cb_addProduct'>
        <div className='cb_modal_container cb_w1200 cb_modal_wrapper'>
          <div className='cb_title_modal'>
            <h3>Danh sách người đại diện</h3>
            <span className='fi fi-rr-cross-small cb_close_modal' onClick={onClose}></span>
          </div>
          <div>
            <div>
              <div className='cb_main_wrapp' style={{ minHeight: 'unset' }}>
                <CustomerFilter onChange={onChange} />
                <BankRepresentativeTable
                  onChangePage={(page) => {
                    onChange({ page });
                  }}
                  data={items}
                  totalPages={totalPages}
                  itemsPerPage={itemsPerPage}
                  page={page}
                  totalItems={totalItems}
                  loading={loading}
                  closeModal={onClose}
                  selectedList={selectedList}
                  setSelectedList={setSelectedList}
                />
              </div>
            </div>
          </div>
          <div className='cb_footer_modal' style={{ justifyContent: 'end' }}>
            <button
              className='cb_btn cb_btn_success'
              onClick={() => {
                methods.setValue('bankRepresentatives', selectedList);
                onClose();
              }}>
              <span className='ti-check'></span> Chọn
            </button>
            <button type='button' className='cb_btn_outline' onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddRepresentativeModal;

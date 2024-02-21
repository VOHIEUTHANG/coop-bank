import React from 'react';
import Modal from 'components/shared/Modal/index';
import styled from 'styled-components';

const ModalContent = styled.p`
  margin-bottom: 0;
`;

const headerModal = (
  <>
    <span className='cb_icon_notice'>
      <i className='fi ti-bell'></i>
    </span>{' '}
    Thông báo
  </>
);

function ModalDelete({ onCloseModal, handleDelete }) {
  return (
    <Modal onClose={onCloseModal} open={true} header={headerModal} footer='Tôi muốn xóa' onConfirm={handleDelete}>
      <ModalContent>Bạn có thật sự muốn xóa? </ModalContent>
      <ModalContent>Bạn sẽ mất dữ liệu này và các dữ liệu liên quan.</ModalContent>
    </Modal>
  );
}

export default ModalDelete;

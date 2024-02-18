import { useDispatch, useSelector } from 'react-redux';
import { hideConfirmModal } from 'actions/global';
import styled from 'styled-components';

const ModalContent = styled.p`
  margin-bottom: 0;
`;

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const { confirmMessage, confirmCallback, labelAccept, labelRefuse } = useSelector((state) => state.global);

  return (
    Array.isArray(confirmMessage) &&
    confirmMessage.length > 0 && (
      <div className='cb_modal cb_modal_open' id='cb_notice_del'>
        <div className='cb_modal_container'>
          <div className='cb_title_modal cb_border_bottom'>
            <h3>
              <span className='cb_icon_notice'>
                <i className='fi fi-rr-bell'></i>
              </span>{' '}
              Thông báo
            </h3>
            <span
              onClick={() => {
                dispatch(hideConfirmModal());
              }}
              className='cb_close_modal fi fi-rr-cross-small'></span>
          </div>
          <div className='cb_main_modal cb_text_center'>
            {confirmMessage.map((p, idx) => (
              <ModalContent key={idx}>{p}</ModalContent>
            ))}
          </div>
          <div className='cb_footer_modal cb_justify_content_center'>
            <button
              onClick={() => {
                confirmCallback();
                dispatch(hideConfirmModal());
              }}
              className='cb_btn cb_btn_danger'>
              {labelAccept ?? 'Tôi muốn xóa'}
            </button>
            <button
              onClick={() => {
                dispatch(hideConfirmModal());
              }}
              className='cb_btn_outline cb_close_modal'>
              {labelRefuse ?? 'Quay về'}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmModal;

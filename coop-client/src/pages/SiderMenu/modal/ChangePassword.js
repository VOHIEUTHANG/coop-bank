import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { showToast } from 'utils/helpers';
import { changePassword } from 'services/user.service';
import FormInput from 'components/shared/FormControl/FormInput';
import FormItem from 'components/shared/FormControl/FormItem';

const ChangePassword = ({ onClose }) => {
  const methods = useForm();
  const [loading, setLoading] = useState(undefined);

  const onSubmit = async (payload) => {
    setLoading(true);
    changePassword(payload)
      .then((e) => {
        showToast.success('Đổi mật khẩu thành công');
        onClose();
      })
      .catch((err) => {
        setLoading(false);
        showToast.error(err?.message || 'Đổi mật khẩu không thành công');
      });
  };

  return (
    <FormProvider {...methods}>
      <div className='bw_modal bw_modal_open'>
        <div className='bw_modal_container'>
          <div className='bw_title_modal'>
            <h3>Đổi mật khẩu</h3>
            <span className='bw_close_modal fi fi-rr-cross-small' onClick={onClose}></span>
          </div>
          <div className='bw_main_modal bw_border_top'>
            <form className='bw_frm_change'>
              <FormItem label='Mật khẩu cũ' isRequired>
                <FormInput
                  disabled={loading}
                  type='password'
                  field='old_password'
                  placeholder='***********'
                  validation={{
                    required: 'Mật khẩu cũ là bắt buộc',
                  }}
                />
              </FormItem>
              <FormItem label='Mật khẩu mới' isRequired>
                <FormInput
                  disabled={loading}
                  type='password'
                  field='new_password'
                  placeholder='***********'
                  validation={{
                    required: 'Mật khẩu mới là bắt buộc',
                    validate: (p) => {
                      if (p.length < 4) {
                        return 'Mật khẩu phải lớn hơn 4 chữ';
                      }
                    },
                  }}
                />
              </FormItem>
              <FormItem label='Nhập lại mật khẩu mới' isRequired>
                <FormInput
                  disabled={loading}
                  type='password'
                  field='re_password'
                  placeholder='***********'
                  validation={{
                    required: 'Nhập lại mật khẩu mới là bắt buộc',
                    validate: (p) => {
                      if (p !== methods.watch('new_password')) {
                        return 'Mật khẩu không khớp, vui lòng kiểm tra lại';
                      }
                      if (p.length < 4) {
                        return 'Mật khẩu phải lớn hơn 4 chữ';
                      }
                    },
                  }}
                />
              </FormItem>
            </form>
          </div>
          <div className='bw_footer_modal'>
            <button
              disabled={loading}
              type='button'
              onClick={methods.handleSubmit(onSubmit)}
              className='bw_btn bw_btn_success'>
              <span className='fi fi-rr-check'></span> Đổi mật khẩu
            </button>
            <button onClick={onClose} type='button' className='bw_btn_outline bw_btn_outline_success'>
              <span disabled={loading} className='fi fi-rr-refresh'></span>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default ChangePassword;

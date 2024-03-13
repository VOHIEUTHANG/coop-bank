export const DefaultFilter = {
  search: '',
  created_date_from: null,
  created_date_to: null,
};

export const QUALIFICATION_TYPE = {
  QUALIFIED: 1,
  UNQUALIFIED: 0,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
};

export const CREDIT_RATING = {
  A: 'A',
  B: 'B',
  C: 'C',
};

export const CREDIT_RATING_OPTIONS = [
  {
    value: CREDIT_RATING.A,
    label: CREDIT_RATING.A,
  },
  {
    value: CREDIT_RATING.B,
    label: CREDIT_RATING.B,
  },
  {
    value: CREDIT_RATING.C,
    label: CREDIT_RATING.C,
  },
];

export const EXPORT_TYPE = {
  CASH_RECEIPT: 1, // giấy tiền mặt
  BANK_RECEIPT: 2, // ủy nhiệm chi
  DEBIT_RECEIPT: 3, // Giấy nhận nợ
  CUSTOMER_SURVEY_FORM: 4, // phiếu khảo sát khách hàng
  CONTRACT: 5, // hợp đồng
  APPRAISAL_REPORT: 6, // tờ trình thẩm định
  ACCOUNT_OPENING: 7, // giấy mở tài khoản
  AUTHORIZATION_FORM: 8, // giấy ủy quyền
  SERVICE_REGISTRATION: 9, // giấy đăng ký dịch vụ,
  CAPITAL_INSPECTOIN: 10, // giấy kiểm tra sử dụng vốn
  DIGITAL_CONTRACT: 11, // hợp đồng kiêm đăng ký ng số
};

export const EXPORT_TYPE_OPTIONS = [
  {
    value: EXPORT_TYPE.CUSTOMER_SURVEY_FORM,
    label: 'Phiếu khảo sát khách hàng',
    file_name: 'phieu_khao_sat_khach_hang',
  },
  {
    value: EXPORT_TYPE.APPRAISAL_REPORT,
    label: 'Tờ trình thẩm định',
    file_name: 'to_trinh_tham_dinh',
  },
  {
    value: EXPORT_TYPE.CONTRACT,
    label: 'Hợp đồng cho vay',
    file_name: 'hop_dong_cho_vay',
  },
  {
    value: EXPORT_TYPE.DEBIT_RECEIPT,
    label: 'Giấy nhận nợ',
    file_name: 'giay_nhan_no',
  },
  {
    value: EXPORT_TYPE.BANK_RECEIPT,
    label: 'Giấy ủy nhiệm chi',
    file_name: 'giay_uy_nhiem_chi',
  },
  {
    value: EXPORT_TYPE.CASH_RECEIPT,
    label: 'Giấy thu tiền mặt',
    file_name: 'giay_thu_tien_mat',
  },
  {
    value: EXPORT_TYPE.ACCOUNT_OPENING,
    label: 'Giấy mở tài khoản',
    file_name: 'giay_mo_tai_khoan',
  },
  {
    value: EXPORT_TYPE.DIGITAL_CONTRACT,
    label: 'Hợp đồng kiêm đăng ký NH số',
    file_name: 'hop_dong_ngan_hang_so',
  },
  {
    value: EXPORT_TYPE.AUTHORIZATION_FORM,
    label: 'Giấy ủy quyền',
    file_name: 'giay_uy_quyen',
  },
  {
    value: EXPORT_TYPE.SERVICE_REGISTRATION,
    label: 'Giấy đăng ký dịch vụ',
    file_name: 'giay_dang_ky_dich_vu',
  },
  {
    value: EXPORT_TYPE.CAPITAL_INSPECTOIN,
    label: 'Giấy kiểm tra sử dụng vốn',
    file_name: 'giay_kiem_tra_su_dung_von',
  },
];

export const Permissoin = {
  ADD: 'INDIVIDUAL_ADD',
  EDIT: 'INDIVIDUAL_EDIT',
  VIEW: 'INDIVIDUAL_VIEW',
  DELETE: 'INDIVIDUAL_DEL',
};

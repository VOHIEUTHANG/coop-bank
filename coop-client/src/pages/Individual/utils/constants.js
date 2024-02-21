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

export const EXPORT_TYPE = {
  CASH_RECEIPT: 1,
  BANK_RECEIPT: 2,
  DEBIT_RECEIPT: 3,
  CONTRACT_60_50: 4,
  CONTRACT_60_60: 5,
  APPRAISAL_REPORT: 6,
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

export const EXPORT_TYPE_OPTIONS = [
  {
    value: EXPORT_TYPE.APPRAISAL_REPORT,
    label: 'Tờ trình thẩm định',
    file_name: 'to_trinh_tham_dinh',
  },
  {
    value: EXPORT_TYPE.CONTRACT_60_50,
    label: 'Hợp đồng 60 50',
    file_name: 'hop_dong_60_50',
  },
  {
    value: EXPORT_TYPE.CONTRACT_60_60,
    label: 'Hợp đồng 60 60',
    file_name: 'hop_dong_60_60',
  },
  {
    value: EXPORT_TYPE.DEBIT_RECEIPT,
    label: 'Giấy nhận nợ',
    file_name: 'giay_nhan_no',
  },
  {
    value: EXPORT_TYPE.CASH_RECEIPT,
    label: 'Giấy thu tiền mặt',
    file_name: 'giay_thu_tien_mat',
  },
  {
    value: EXPORT_TYPE.BANK_RECEIPT,
    label: 'Giấy ủy nhiệm chi',
    file_name: 'giay_uy_nhiem_chi',
  },
];

export const Permissoin = {
  ADD: 'INDIVIDUAL_ADD',
  EDIT: 'INDIVIDUAL_EDIT',
  VIEW: 'INDIVIDUAL_VIEW',
  DELETE: 'INDIVIDUAL_DEL',
};

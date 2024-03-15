export const DefaultFilter = {
  search: '',
  created_date_from: null,
  created_date_to: null,
};

const SCHOOL_LEVEL = {
  PRESCHOOL: 1,
  PRIMARY_SCHOOL: 2,
  SECONDARY_SCHOOL: 3,
  HIGH_SCHOOL: 4,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
};

export const AffiliateUnitLevelOptions = [
  {
    value: SCHOOL_LEVEL.PRESCHOOL,
    label: 'Mầm non',
  },
  {
    value: SCHOOL_LEVEL.PRIMARY_SCHOOL,
    label: 'Cấp một',
  },
  {
    value: SCHOOL_LEVEL.SECONDARY_SCHOOL,
    label: 'Cấp hai',
  },
  {
    value: SCHOOL_LEVEL.HIGH_SCHOOL,
    label: 'Cấp ba',
  },
];

export const EXPORT_TYPE = {
  AFFILATE_CONTRACT: 1,
  SERVICE_CONTRACT: 2,
  ASSIGN_PAY: 3,
  PERIODICAL_CHECK: 4,
  CHECKING: 5,
};

export const EXPORT_TYPE_OPTIONS = [
  {
    value: EXPORT_TYPE.AFFILATE_CONTRACT,
    label: 'Hợp đồng liên kết',
    file_name: 'hop_dong_lien_ket',
  },
  {
    value: EXPORT_TYPE.SERVICE_CONTRACT,
    label: 'Hợp đồng dịch vụ',
    file_name: 'hop_dong_dich_vu',
  },
  {
    value: EXPORT_TYPE.ASSIGN_PAY,
    label: 'Giấy cử người trả tiền',
    file_name: 'giay_cu_nguoi_tra_tien',
  },
  {
    value: EXPORT_TYPE.PERIODICAL_CHECK,
    label: 'Kiểm tra sử dụng vốn',
    file_name: 'giay_kiem_tra_su_dung_von',
  },
  {
    value: EXPORT_TYPE.CHECKING,
    label: 'Kiểm tra đơn vị liên kết',
    file_name: 'giay_kiem_tra_don_vi_lien_ket',
  },
];

// export const Permission = {
//   ADD: 'AFFILIATE_UNIT_ADD',
//   EDIT: 'AFFILIATE_UNIT_EDIT',
//   VIEW: 'AFFILIATE_UNIT_VIEW',
//   DELETE: 'AFFILIATE_UNIT_DEL',
// };

export const DefaultFilter = {
  search: '',
  created_date_from: null,
  created_date_to: null,
};

const POSITION = {
  PRINCIPAL: 1,
  UNION_LEADER: 2,
  ACCOUNTANT: 3,
  REPLACEMENT_REPRESENTATIVE: 4,
  OTHER: 5,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
};

export const PositionOptions = [
  {
    value: POSITION.PRINCIPAL,
    label: 'Hiệu trưởng',
  },
  {
    value: POSITION.UNION_LEADER,
    label: 'Chủ tịch công đoàn',
  },
  {
    value: POSITION.ACCOUNTANT,
    label: 'Kế toán trưởng',
  },
  {
    value: POSITION.REPLACEMENT_REPRESENTATIVE,
    label: 'Người đại thay thế',
  },
  {
    value: POSITION.OTHER,
    label: 'Chức vụ khác',
  },
];

export const Permissoin = {
  ADD: 'AFFILIATE_UNIT_ADD',
  EDIT: 'AFFILIATE_UNIT_EDIT',
  VIEW: 'AFFILIATE_UNIT_VIEW',
  DELETE: 'AFFILIATE_UNIT_DEL',
};

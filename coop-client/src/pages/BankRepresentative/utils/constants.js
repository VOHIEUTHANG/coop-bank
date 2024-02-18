export const DefaultFilter = {
  search: '',
  created_date_from: null,
  created_date_to: null,
};

const POSITION = {
  DIRECTOR: 1,
  VICE_DIRECTOR: 2,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
  OTHER: 3,
};

export const PositionOptions = [
  {
    value: POSITION.DIRECTOR,
    label: 'Giám đốc',
  },
  {
    value: POSITION.VICE_DIRECTOR,
    label: 'Phó giám đốc',
  },
];

export const Permissoin = {
  ADD: 'BANK_REPRESENTATIVE_ADD',
  EDIT: 'BANK_REPRESENTATIVE_EDIT',
  VIEW: 'BANK_REPRESENTATIVE_VIEW',
  DELETE: 'BANK_REPRESENTATIVE_DEL',
};

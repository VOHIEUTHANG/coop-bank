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

export const Permission = {
  ADD: 'GIFT_ADD',
  EDIT: 'GIFT_EDIT',
  VIEW: 'GIFT_VIEW',
  DELETE: 'GIFT_DEL',
  EXPORT: 'GIFT_EXPORT',
};

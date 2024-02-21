export enum Position {
  Director, // giám đốc
  ViceDirector, // phó giám đốc
  Accountant, // kế toán
  Principal, // hiệu trưởng
  VicePrincipal // phó hiệu trưởng
}

export const EXPORT_TYPE = {
  CASH_RECEIPT: 1,
  BANK_RECEIPT: 2,
  DEBIT_RECEIPT: 3,
  CONTRACT_60_50: 4,
  CONTRACT_60_60: 5,
  APPRAISAL_REPORT: 6
};

export const QUALIFICATION_TYPE = {
  QUALIFIED: 1,
  UNQUALIFIED: 0
};

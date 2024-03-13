export enum BankRepresentativePosition {
  DIRECTOR = 1,
  VICE_DIRECTOR = 2,
  DEPARTMENT_HEAD = 3,
  VICE_DEPARTMENT_HEAD = 4
}

export function getBankRepresentativePositionName(position: number) {
  switch (position) {
    case BankRepresentativePosition.DIRECTOR:
      return 'Giám Đốc';
    case BankRepresentativePosition.VICE_DIRECTOR:
      return 'Phó Giám Đốc';
    case BankRepresentativePosition.DEPARTMENT_HEAD:
      return 'Trưởng Phòng Giao Dịch';
    case BankRepresentativePosition.VICE_DEPARTMENT_HEAD:
      return 'Phó Phòng Giao Dịch';
    default:
      return 'Không xác định';
  }
}

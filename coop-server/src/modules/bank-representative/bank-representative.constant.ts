export enum BankRepresentativePosition {
  DIRECTOR = 1,
  VICE_DIRECTOR = 2
}

export function getBankRepresentativePositionName(position: number) {
  switch (position) {
    case BankRepresentativePosition.DIRECTOR:
      return 'Giám Đốc';
    case BankRepresentativePosition.VICE_DIRECTOR:
      return 'Phó Giám Đốc';
    default:
      return 'Không xác định';
  }
}

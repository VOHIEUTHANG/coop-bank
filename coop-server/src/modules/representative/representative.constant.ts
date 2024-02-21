export enum RepresentativePosition {
  PRINCIPAL = 1,
  UNION_LEADER = 2,
  ACCOUNTANT = 3,
  REPLACEMENT_REPRESENTATIVE = 4
}

export function getRepresentativePositionName(position: RepresentativePosition) {
  switch (position) {
    case RepresentativePosition.PRINCIPAL:
      return 'Hiệu Trưởng';
    case RepresentativePosition.UNION_LEADER:
      return 'Chủ tịch công đoàn';
    case RepresentativePosition.ACCOUNTANT:
      return 'Kế toán trưởng';
    case RepresentativePosition.REPLACEMENT_REPRESENTATIVE:
      return 'Người đại diện thay thế';
    default:
      return 'Không xác định';
  }
}

export enum Position {
  Director, // giám đốc
  ViceDirector, // phó giám đốc
  Accountant, // kế toán
  Principal, // hiệu trưởng
  VicePrincipal // phó hiệu trưởng
}

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
  DIGITAL_CONTRACT: 11 // hợp đồng kiêm đăng ký ng số
};

export const QUALIFICATION_TYPE = {
  QUALIFIED: 1,
  UNQUALIFIED: 0
};

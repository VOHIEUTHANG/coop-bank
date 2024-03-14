import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsDateFormatConstraint implements ValidatorConstraintInterface {
  validate(value: any): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(value);
  }

  defaultMessage(): string {
    return 'Định dạng ngày tháng không hợp lệ. Sử dụng DD/MM/YYYY.';
  }
}

export function IsDateFormat(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDateFormatConstraint
    });
  };
}

@ValidatorConstraint({ name: 'isPhoneNumber', async: false })
export class IsPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const phoneNumberRegex = /^(0\d{9,10})$/;
    return phoneNumberRegex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Số điện thoại không đúng định dạng';
  }
}

export function IsPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPhoneNumberConstraint
    });
  };
}

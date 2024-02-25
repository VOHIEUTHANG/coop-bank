import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsDateFormatConstraint implements ValidatorConstraintInterface {
    validate(value: any): boolean;
    defaultMessage(): string;
}
export declare function IsDateFormat(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;

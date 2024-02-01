export default function JoiValidation(ValidationSchema: any, data: Record<string, any>) {
  const { error, value } = ValidationSchema.validate(data);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return value;
}

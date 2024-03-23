import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { User } from 'src/modules/users/users.entity';
import { DocumentFile } from '../entity/document-file.entity';

export class CreateDocumentDto {
  @IsOptional()
  document_id: string;

  @ApiProperty()
  @IsString()
  document_name: string;

  @IsOptional()
  created_user: User;

  @IsOptional()
  document_files: DocumentFile[];
}

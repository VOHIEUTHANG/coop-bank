import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Document } from './document.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class DocumentFile {
  @PrimaryGeneratedColumn()
  document_file_id: number;
  @Column()
  document_file_url: string;
  @Column()
  document_file_name: string;
  @Column()
  document_file_extension: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: string;

  @ManyToOne(() => Document, (document) => document.document_files)
  @JoinColumn({ name: 'document_id' })
  document: Document;
}

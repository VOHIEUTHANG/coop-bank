import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Individual } from './individual.entity';

@Entity()
export class IndividualFile {
  @PrimaryGeneratedColumn()
  individual_file_id: number;
  @Column()
  individual_file_url: string;
  @Column()
  individual_file_name: string;
  @Column()
  individual_file_extension: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: string;

  @ManyToOne(() => Individual, (individual) => individual.individual_files)
  @JoinColumn({ name: 'individual_id' })
  individual: Individual;
}

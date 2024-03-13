import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { AffiliateUnit } from './affiliate-unit.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class AffiliateUnitFile {
  @PrimaryGeneratedColumn()
  affiliate_unit_file_id: number;
  @Column()
  affiliate_unit_file_url: string;
  @Column()
  affiliate_unit_file_name: string;
  @Column()
  affiliate_unit_file_extension: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: string;

  @ManyToOne(() => AffiliateUnit, (affiliateUnit) => affiliateUnit.affiliate_unit_files)
  @JoinColumn({ name: 'affiliate_unit_id' })
  affiliate_unit: AffiliateUnit;
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AffiliateUnit } from './affiliate-unit.entity';

@Entity()
export class AffiliateUnitFile {
  @PrimaryGeneratedColumn()
  affiliate_unit_file_id: number;
  @Column()
  affiliate_unit_file_name: string;
  @Column()
  affiliate_unit_file_extension: string;

  // @ManyToOne(() => AffiliateUnit, (affiliateUnit) => affiliateUnit.affiliate_unit_files)
  // @JoinColumn({ name: 'affiliate_unit_id' })
  // affiliate_unit: AffiliateUnit;
}

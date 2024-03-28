import { Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY, DATE_TIME_FORMAT } from 'src/constant/date.constant';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { Gender } from 'src/types/data-type';
import { User } from 'src/modules/users/users.entity';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { IndividualFile } from './individual-file.entity';
import { Contract } from 'src/modules/contract/entity/contract.entity';

@Entity()
export class Individual {
  constructor(individualId: string) {
    this.individual_id = individualId;
  }

  @PrimaryColumn()
  individual_id: string;
  @Column({ nullable: false })
  individual_fullname: string;
  @Column({ nullable: true })
  phone_number: string;
  @Column({ nullable: true })
  current_address: string;
  @Column({ nullable: true })
  origin_address: string;
  @Column({ nullable: false })
  individual_code: string;
  @Column({ nullable: false })
  individual_bank_number: string;
  @Column({ nullable: true })
  individual_cic: string;
  @Column({ nullable: true })
  individual_cic_rank: string;
  @Column({ nullable: true })
  individual_cic_score: number;
  @Column()
  total_income: number;
  @Column()
  gender: Gender;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  birth_date: string;
  @Column({ unique: true, nullable: false })
  id_number: string;
  @Column({ nullable: true })
  id_front_image: string;
  @Column({ nullable: true })
  id_back_image: string;
  @Column()
  id_issued_by: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  id_issued_date: string;
  @Transform(({ value }) => {
    try {
      return value && JSON.parse(value);
    } catch (error) {
      console.error('Parse json export data field error !');
    }
  })
  @Column({ nullable: true, length: 2000 })
  export_data: string;

  @Column({ nullable: false })
  individual_position: string;

  @Column({ nullable: true })
  heir_full_name: string;
  @Column({ nullable: true })
  heir_id_number: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  heir_birth_date: string;
  @Column({ nullable: true })
  heir_address: string;
  @Column({ nullable: true })
  heir_phone: string;
  @Exclude()
  @ManyToOne(() => AffiliateUnit, (affiliateUnit) => affiliateUnit.individuals, { eager: true })
  @JoinColumn({ name: 'affiliate_unit_id' })
  affiliate_unit: AffiliateUnit;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_id)
  @Expose()
  affiliate_unit_id: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_name)
  @Expose()
  affiliate_unit_name: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_code)
  @Expose()
  affiliate_unit_code: string;

  @Transform(({ value }) => value && moment(value).format(DATE_TIME_FORMAT))
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: string;
  @Transform(({ value }) => value && moment(value).format(DATE_TIME_FORMAT))
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: string;
  @Transform(({ value }) => value && moment(value).format(DATE_TIME_FORMAT))
  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  updated_at: string;

  @Exclude()
  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'created_user' })
  created_user: User;

  @Transform(({ obj }) => obj.created_user?.username)
  @Expose()
  created_username: string;

  @Transform(({ obj }) => obj.created_user?.full_name)
  @Expose()
  created_fullname: string;

  @Expose()
  interest_rate: number;

  @OneToMany(() => IndividualFile, (individualFile) => individualFile.individual, {
    cascade: true,
    eager: true
  })
  individual_files: IndividualFile[];

  @OneToMany(() => Contract, (contract) => contract.individual, {})
  contracts: Contract[];
}

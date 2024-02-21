import { Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY, DATE_TIME_FORMAT } from 'src/constant/date.constant';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../users/users.entity';
import { Gender } from 'src/types/data-type';
import { APPLICATION_CONFIG } from 'src/config/application';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';

@Entity()
export class Representative {
  @PrimaryColumn()
  representative_id: string;
  @Column({ nullable: false })
  representative_name: string;
  @Column({ nullable: true })
  representative_email: string;
  @Column({ nullable: true })
  representative_position: number;
  @Column({ nullable: true })
  phone_number: string;
  @Column({ nullable: true })
  address: string;
  @Column()
  gender: Gender;
  @Column()
  bank_number: string;
  @Column()
  bank_name: string;
  @Column()
  tax_code: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  birth_date: string;
  @Column({ unique: true, nullable: false })
  id_number: string;
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  id_front_image: string;
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  id_back_image: string;
  @Column()
  id_issued_by: string; // nơi cấp
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  id_issued_date: string;
  @Column()
  decision_number: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  decision_date: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  effective_date_from: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  effective_date_to: string;
  @Column({ nullable: true })
  decision_district: string;
  @Column({ nullable: true })
  decider_name: string;
  @Column({ nullable: true })
  decider_position: string;

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

  @ManyToMany(() => AffiliateUnit, (affiliateUnit) => affiliateUnit.representatives)
  @JoinTable({ name: 'representative_affiliate_unit' })
  affiliateUnits: AffiliateUnit;

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
}

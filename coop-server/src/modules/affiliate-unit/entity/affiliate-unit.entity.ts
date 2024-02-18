import { Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY, DATE_TIME_FORMAT } from 'src/constant/date.constant';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../../users/users.entity';
import { APPLICATION_CONFIG } from 'src/config/application';
import { Representative } from 'src/modules/representative/representative.entity';

@Entity()
export class AffiliateUnit {
  constructor(affiliateUnitId: string) {
    this.affiliate_unit_id = affiliateUnitId;
  }

  @PrimaryColumn()
  affiliate_unit_id: string;
  @Column({ nullable: false })
  affiliate_unit_name: string;
  @Column()
  affiliate_unit_code: string;
  @Column({ nullable: true })
  affiliate_unit_level: number;
  @Column({ nullable: true })
  affiliate_unit_address: string;
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  affiliate_unit_image_1: string;
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  affiliate_unit_image_2: string;
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  affiliate_unit_paycheck: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  founding_date: string;

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

  // @OneToMany(() => AffiliateUnitFile, (affiliateUnitFile) => affiliateUnitFile.affiliate_unit, {
  //   cascade: true
  // })
  // affiliate_unit_files: AffiliateUnitFile[];"

  @ManyToMany(() => Representative, (representative) => representative.affiliateUnits, {
    eager: true
  })
  representatives: Representative[];

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

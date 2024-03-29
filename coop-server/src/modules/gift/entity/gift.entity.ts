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
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../../users/users.entity';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';

@Entity()
export class Gift {
  @PrimaryColumn()
  gift_id: string;

  @Transform(({ value }) => {
    try {
      return value && JSON.parse(value);
    } catch (error) {
      console.error('Parse json export data field error !');
    }
  })
  @Column({ nullable: true, length: 2000 })
  gifts: string;

  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  proposed_date: string;

  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  gift_date: string;

  @Column({ nullable: true })
  gift_image_1: string;

  @Column({ nullable: true })
  gift_image_2: string;

  @Column({ nullable: true })
  gift_image_3: string;

  @Column({ nullable: true })
  gift_image_4: string;

  @Exclude()
  @ManyToOne(() => AffiliateUnit, { eager: true })
  @JoinColumn({ name: 'affiliate_unit_id' })
  affiliate_unit: AffiliateUnit;

  @Exclude()
  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'giver_user_id' })
  giver_user: User;

  @Exclude()
  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'proposed_user_id' })
  proposed_user: User;

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

  @Transform(({ obj }) => obj.giver_user?.user_id)
  @Expose()
  giver_user_id: number;

  @Transform(({ obj }) => obj.proposed_user?.user_id)
  @Expose()
  proposed_user_id: number;

  @Transform(({ obj }) => obj.proposed_user?.full_name)
  @Expose()
  proposed_user_name: number;

  @Transform(({ obj }) => obj.giver_user?.full_name)
  @Expose()
  giver_user_name: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_id)
  @Expose()
  affiliate_unit_id: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_name)
  @Expose()
  affiliate_unit_name: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_code)
  @Expose()
  affiliate_unit_code: string;
}

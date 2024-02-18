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
import { APPLICATION_CONFIG } from 'src/config/application';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';

@Entity()
export class Gift {
  @PrimaryColumn()
  gift_id: string;
  @Column({ nullable: false })
  gift_content: string;
  @Column({ nullable: false })
  gift_description: string;

  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  gift_date: string;

  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  gift_image_1: string;

  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  gift_image_2: string;

  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  gift_image_3: string;

  @Exclude()
  @ManyToOne(() => AffiliateUnit, { eager: true })
  @JoinColumn({ name: 'affiliate_unit_id' })
  affiliate_unit: AffiliateUnit;

  @Exclude()
  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'giver_user_id' })
  giver_user: User;

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

  @Transform(({ obj }) => obj.giver_user?.full_name)
  @Expose()
  giver_user_name: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_id)
  @Expose()
  affiliate_unit_id: string;

  @Transform(({ obj }) => obj.affiliate_unit?.affiliate_unit_name)
  @Expose()
  affiliate_unit_name: string;
}

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
import { Gender } from 'src/types/data-type';
import { APPLICATION_CONFIG } from 'src/config/application';
import { User } from 'src/modules/users/users.entity';

@Entity()
export class Individual {
  @PrimaryColumn()
  individual_id: string;
  @Column({ nullable: false })
  individual_fullname: string;
  @Column({ nullable: true })
  phone_number: string;
  @Column({ nullable: true })
  home_address: string;
  @Column({ nullable: true })
  work_name: string;
  @Column({ nullable: true })
  work_address: string;
  @Column()
  gender: Gender;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
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
  id_issued_by: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime' })
  id_issued_date: string;

  @Column()
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  salary_file: string;
  @Column()
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  marriage_file: string;
  @Column()
  @Transform(({ value }) => value && `${APPLICATION_CONFIG.base_url}/${value}`)
  @Column({ nullable: true })
  appoint_file: string;

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
}

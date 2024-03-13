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
import { User } from 'src/modules/users/users.entity';
import { Individual } from 'src/modules/individual/entity/individual.entity';

@Entity()
export class Contract {
  @PrimaryColumn()
  contract_id: string;
  @Column({ nullable: false })
  contract_number: string;
  @Column()
  is_qualified: number;
  @Column()
  loan_purpose: string;
  @Column()
  loan_bank_number: string;
  @Column()
  total_money: number;
  @Column()
  loan_money: number;

  @Column()
  interest_rate: number;
  @Column()
  month_count: number;
  @Column()
  period_count: number;
  @Column()
  declared_total_income: number;
  @Column()
  estimated_total_income: number;

  @Column()
  paid_date: number;

  @Column()
  individual_bank_number: string;
  @Column()
  individual_cic: string;
  @Column()
  individual_cic_rank: string;
  @Column()
  individual_cic_score: number;

  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  contract_date: string;

  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  start_date: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  end_date: string;
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  @Column({ type: 'datetime', nullable: true })
  first_pay_date: string;

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

  @Exclude()
  @ManyToOne(() => Individual, (individual) => individual.contracts, { eager: true })
  @JoinColumn({ name: 'individual_id' })
  individual: Individual;

  @Expose()
  @Transform(({ obj }) => obj.individual?.individual_id)
  individual_id: string;

  @Expose()
  @Transform(({ obj }) => obj.individual?.individual_fullname)
  individual_fullname: string;

  @Expose()
  @Transform(({ obj }) => obj.individual?.id_number)
  individual_id_number: string;
}

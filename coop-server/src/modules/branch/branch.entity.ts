import { Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { DATE_TIME_FORMAT } from 'src/constant/date.constant';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../users/users.entity';
import { BankRepresentative } from '../bank-representative/bank-representative.entity';
import { TransactionRoom } from '../transaction-room/transaction-room.entity';

@Entity()
export class Branch {
  @PrimaryColumn()
  branch_id: string;
  @Column({ nullable: false })
  branch_name: string;
  @Column({ nullable: true })
  address: string;
  @Column({ nullable: true })
  branch_province: string;
  @Column()
  interest_rate: number;
  @Column()
  bank_number: string;
  @Column()
  phone_number_main: string;
  @Column({ nullable: true })
  phone_number_sub: string;
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

  @OneToMany(() => User, (user) => user.branch)
  users: User[];

  @Transform(({ obj }) => obj.created_user?.username)
  @Expose()
  created_username: string;

  @Transform(({ obj }) => obj.created_user?.full_name)
  @Expose()
  created_fullname: string;

  @ManyToMany(() => BankRepresentative, (bankRepresentative) => bankRepresentative.branches)
  bankRepresentatives: BankRepresentative[];

  @OneToMany(() => TransactionRoom, (transactionRoom) => transactionRoom.branch)
  transaction_rooms: TransactionRoom[];

  constructor(branch_id: string) {
    this.branch_id = branch_id;
  }
}

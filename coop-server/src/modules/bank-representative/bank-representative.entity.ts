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
import { Branch } from '../branch/branch.entity';
import { TransactionRoom } from '../transaction-room/transaction-room.entity';

@Entity()
export class BankRepresentative {
  @PrimaryColumn()
  bank_representative_id: string;
  @Column({ nullable: false })
  bank_representative_name: string;
  @Column({ nullable: true })
  bank_representative_email: string;
  @Column({ nullable: false })
  bank_representative_position: number;

  @Column({ nullable: true })
  authoritative_number: string;
  @Column({ type: 'datetime', nullable: true })
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  authoritative_date: string;

  @Column({ nullable: false })
  phone_number: string;
  @Column({ nullable: true })
  address: string;
  @Column({ nullable: false })
  gender: Gender;
  @Column()
  @Column({ type: 'datetime', nullable: true })
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  birth_date: string;
  @Column({ unique: true, nullable: false })
  id_number: string;
  @Column()
  id_issued_by: string; // nơi cấp
  @Column({ type: 'datetime' })
  @Transform(({ value }) => value && moment(value).format(DATE_FORMAT_DDMMYYYY))
  id_issued_date: string;

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

  @ManyToMany(() => Branch, (branch) => branch.bankRepresentatives)
  @JoinTable({ name: 'bank_representative_branch' })
  branches: Branch[];

  @ManyToMany(() => TransactionRoom, (transactionRoom) => transactionRoom.bankRepresentatives, {
    eager: true
  })
  @JoinTable({ name: 'bank_representative_transaction_room' })
  transaction_rooms: TransactionRoom[];

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

  constructor(bank_representative_id: string) {
    this.bank_representative_id = bank_representative_id;
  }
}

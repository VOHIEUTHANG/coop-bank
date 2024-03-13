import { Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { DATE_TIME_FORMAT } from 'src/constant/date.constant';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Branch } from '../branch/branch.entity';
import { TransactionRoom } from '../transaction-room/transaction-room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column({ unique: true, nullable: false })
  username: string;
  @Column()
  email: string;
  @Column()
  phone_number: string;
  @Column({ nullable: false })
  full_name: string;
  @Exclude()
  @Column({ nullable: false })
  password: string;
  @Column({ default: false })
  is_admin: boolean;
  @Column({ default: true })
  is_active: boolean;
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
  @ManyToOne(() => Branch, (branch) => branch.users)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Transform(({ obj }) => obj.branch?.branch_id)
  @Expose()
  branch_id: string;

  @Transform(({ obj }) => obj.branch?.branch_name)
  @Expose()
  branch_name: string;

  @Exclude()
  @ManyToOne(() => TransactionRoom, (transactionRoom) => transactionRoom.users)
  @JoinColumn({ name: 'transaction_room_id' })
  transaction_room: TransactionRoom;

  @Transform(({ obj }) => obj.transaction_room?.transaction_room_id)
  @Expose()
  transaction_room_id: string;

  @Transform(({ obj }) => obj.transaction_room?.transaction_room_name)
  @Expose()
  transaction_room_name: string;

  constructor(user_id: number) {
    this.user_id = user_id;
  }
}

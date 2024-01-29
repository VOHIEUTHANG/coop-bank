import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn
} from 'typeorm';
import { Report } from '../reports/reports.entity';

@Entity()
export class User {
  @PrimaryColumn()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;

  @Column({ default: false })
  is_admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Insert new user:', this);
  }
  @AfterUpdate()
  logUpdate() {
    console.log('Update user:', this);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove user:', this);
  }
}

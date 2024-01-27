import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;

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

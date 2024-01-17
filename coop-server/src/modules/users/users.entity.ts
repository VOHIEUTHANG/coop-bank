import { ApiProperty } from "@nestjs/swagger";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty()
  @Column({ default: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  deleted_user: string;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: string;

  @Column({ nullable: true })
  created_user: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: string;

  @Column({ nullable: true })
  updated_user: string;

  @UpdateDateColumn({
    type: "timestamp",
    onUpdate: "CURRENT_TIMESTAMP(6)"
  })
  updated_at: string;
}

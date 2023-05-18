import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('links')
export class Link extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	url: string;

	@Column()
	originalUrl: string;

	@Column({ default: 0 })
	count: number;

	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
	updatedAt: Date;
}

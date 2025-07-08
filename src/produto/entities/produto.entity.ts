import { IsInt, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;

  @IsNotEmpty()
  @Column({ length: 5, nullable: false })
  unidademedida: string;

  @IsNotEmpty()
  @IsInt()
  @Column({ type: 'int', default: 0, nullable: false })
  quantidade: boolean;
}

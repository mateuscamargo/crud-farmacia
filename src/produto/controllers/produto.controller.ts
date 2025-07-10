import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.service';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.ProdutoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.ProdutoService.findAllByNome(nome);
  }

  @Get('/valor/:valor')
  @HttpCode(HttpStatus.OK)
  findAllByValor(@Param('valor') valor: number): Promise<Produto[]> {
    return this.ProdutoService.findAllByValor(valor);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Produto: Produto): Promise<Produto> {
    return this.ProdutoService.create(Produto);
  }
  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(@Body() Produto: Produto): Promise<Produto> {
    return this.ProdutoService.create(Produto);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ProdutoService.delete(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./schemas/book.schema";
import { CreateBookDTO } from "./dto/create-book.dto";
import { UpdateBookDTO } from "./dto/update-book.dto";

// コントローラー
@Controller("books")
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async create(@Body() book: CreateBookDTO): Promise<Book> {
    return this.bookService.create(book);
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<Book> {
    return this.bookService.delete(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() book: UpdateBookDTO
  ): Promise<Book> {
    return this.bookService.update(id, book);
  }
}

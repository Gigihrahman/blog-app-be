import { IsNotEmpty, IsString } from "class-validator";
import { PaginationQueryParams } from "../../pagination/dto/pagination.dto";

export class CreateBlogDTO extends PaginationQueryParams {
  @IsNotEmpty()
  @IsString()
  readonly title!: string;

  @IsNotEmpty()
  @IsString()
  readonly description!: string;
  @IsNotEmpty()
  @IsString()
  readonly content!: string;
  @IsNotEmpty()
  @IsString()
  readonly category!: string;
}

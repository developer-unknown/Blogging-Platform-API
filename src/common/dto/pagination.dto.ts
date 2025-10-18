import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @IsInt()
    limit?: number;

    @IsOptional()
    @IsPositive()
    @IsInt()
    skip?: number;
    
    @IsOptional()
    @IsString()
    search?: string;
}

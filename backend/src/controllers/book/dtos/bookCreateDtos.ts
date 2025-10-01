import { ArrayNotEmpty, IsArray, IsDefined, IsIn, MaxLength, MinLength } from "class-validator";

const GENRES = ["Action", "Comedy", "Documentary", "Drama"];

class BookCreateDto{
    @IsDefined()
    @MaxLength(15)
    title:string
    
    @IsDefined()
    author:string

    @IsArray()
    @ArrayNotEmpty()
    @IsIn(GENRES, { each: true }) // هر عنصر آرایه باید یکی از مقادیر GENRES باشه
    genre: string[];
}

export default BookCreateDto
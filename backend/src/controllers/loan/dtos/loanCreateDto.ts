import { IsDefined, IsMongoId } from "class-validator";

class LoanCreateDto {
    @IsDefined()
    @IsMongoId()
    userId:string

    @IsDefined()
    @IsMongoId()
    bookId:string
}
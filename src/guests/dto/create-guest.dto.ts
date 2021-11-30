import { Contains, IsDate, IsIn, IsInt, IsString } from "class-validator"
import { isFloat32Array } from "util/types";

export class CreateGuestDto {

    @IsInt()
    no: number;
    @IsString()
    name: String;
    @IsString()
    phone: String;
    @IsDate()
    date: Date;
    @IsInt()
    temperature: number;
    @IsString()
    isHot: String;
    @IsString()
    isCold: String;
    @IsString()
    isSick: String;
}
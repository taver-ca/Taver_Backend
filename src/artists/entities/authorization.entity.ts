import { ApiProperty } from '@nestjs/swagger';

export class authorization {
    @ApiProperty()
    code: string;
    @ApiProperty()
    code_verifier: string;
    @ApiProperty()
    startDate: Date;
    @ApiProperty()
    endDate: Date;
}

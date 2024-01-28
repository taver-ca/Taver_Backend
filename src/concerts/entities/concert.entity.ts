import { ApiProperty } from '@nestjs/swagger';

export class concert 
{
    @ApiProperty()
    artistName: string;
    @ApiProperty()
    startDate: Date;
    @ApiProperty()
    endDate: Date;
}

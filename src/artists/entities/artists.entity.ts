import { ApiProperty } from '@nestjs/swagger';
import { AccessToken } from '@spotify/web-api-ts-sdk';

export class artists {
    @ApiProperty()
    access_token: AccessToken;
    @ApiProperty()
    startDate: Date;
    @ApiProperty()
    endDate: Date;
}

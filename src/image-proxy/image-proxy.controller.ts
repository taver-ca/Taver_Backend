import { Controller, Get, Query,Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('image-proxy')
export class ImageProxyController {

 // This method will handle GET requests to /image-proxy
 @Get()
 getImage(@Res() res: Response, @Query('url') url: string, @Query('responseType') responseType: string) {
    console.log("url: ");
    console.log(url);
    console.log("responseType:");
    console.log(responseType);

    res.status(200).send(null);

 }



}

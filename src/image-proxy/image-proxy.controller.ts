import { Controller, Get, Query, Res, Req, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import axios from 'axios';
var url = require('url');

@Controller('image-proxy')
export class ImageProxyController {

    // This method will handle GET requests to /image-proxy
    @Get()
    async getImage(@Res() res: Response, @Query('url') imageUrl: string, @Query('responseType') responseType: string) {

        // Validate the URL (similar to your validUrl middleware)
        if (!imageUrl) {
            throw new HttpException('No url specified', HttpStatus.BAD_REQUEST);
        } else if (typeof imageUrl !== 'string' || !url.parse(imageUrl).host) {
            throw new HttpException(`Invalid url specified: ${imageUrl}`, HttpStatus.BAD_REQUEST);
        }

        try {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const base64 = Buffer.from(response.data, 'binary').toString('base64');
            const dataUrl = `data:${response.headers['content-type']};base64,${base64}`;
      
            switch (responseType) {
              case 'blob':
                res.send(response.data);
                break;
              case 'text':
              default:
                res.send(dataUrl);
            }
          } catch (error) {
            console.error(error.message);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }



}

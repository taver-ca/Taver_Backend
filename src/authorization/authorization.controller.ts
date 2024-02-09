import { Controller, Post, Body, Res } from '@nestjs/common';
import { authorization } from './entities/authorization.entity';
import { Response } from 'express';
import { AuthorizationService } from './authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) { }

  @Post()
  async getAuthorization(@Res() res: Response, @Body() authorization: authorization) {
    console.log("auhthorization: ");
    console.log(authorization);
    var result = await this.authorizationService.GetAuthorization(authorization.code, authorization.code_verifier);
    return res.status(200).send(result);
  }
}

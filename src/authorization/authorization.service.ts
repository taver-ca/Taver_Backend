import { Injectable } from '@nestjs/common';
import { getToken } from 'src/common/spotifyApi';

@Injectable()
export class AuthorizationService {
  async GetAuthorization(code: string, code_verifier: string) { 

    const token = await getToken(code, code_verifier);    
    const jsonContent = JSON.stringify(token);

    console.log(jsonContent);

    return jsonContent;
  }
}
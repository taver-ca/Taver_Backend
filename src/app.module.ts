import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConcertsModule } from './concerts/concerts.module';
import { ConfigModule } from '@nestjs/config';
import { ArtistsModule } from './artists/artists.module';
import { AuthorizationModule } from './authorization/authorizatoin.module'
import { ImageProxyController } from './image-proxy/image-proxy.controller';

@Module({
  imports: [ConfigModule.forRoot(), ConcertsModule, ArtistsModule, AuthorizationModule],
  controllers: [AppController, ImageProxyController],
  providers: [AppService],
})
export class AppModule { }

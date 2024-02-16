import { Test, TestingModule } from '@nestjs/testing';
import { ImageProxyController } from './image-proxy.controller';

describe('ImageProxyController', () => {
  let controller: ImageProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageProxyController],
    }).compile();

    controller = module.get<ImageProxyController>(ImageProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

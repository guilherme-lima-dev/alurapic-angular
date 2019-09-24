import { PhotoDetailModule } from './photo-detail.module';

describe('PhotoDetailModule', () => {
  let photoDetailModule: PhotoDetailModule;

  beforeEach(() => {
    photoDetailModule = new PhotoDetailModule();
  });

  it('should create an instance', () => {
    expect(photoDetailModule).toBeTruthy();
  });
});

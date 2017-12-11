import { Moment.PipePipe } from './moment.pipe.pipe';

describe('Moment.PipePipe', () => {
  it('create an instance', () => {
    const pipe = new Moment.PipePipe();
    expect(pipe).toBeTruthy();
  });
});

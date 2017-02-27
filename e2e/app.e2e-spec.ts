import { LiteralErrorReproPage } from './app.po';

describe('literal-error-repro App', () => {
  let page: LiteralErrorReproPage;

  beforeEach(() => {
    page = new LiteralErrorReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

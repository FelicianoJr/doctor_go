import { VemDoutorPage } from './app.po';

describe('vem-doutor App', function() {
  let page: VemDoutorPage;

  beforeEach(() => {
    page = new VemDoutorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BaconAppPage } from './app.po';

describe('bacon-app App', () => {
  let page: BaconAppPage;

  beforeEach(() => {
    page = new BaconAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

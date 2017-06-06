import{ MediaWallPage } from './app.po';

describe('loklak-media-walls App', function () {

  let page: MediaWallPage;

  beforeEach(function () {
    page = new MediaWallPage();
  });

  it('should display message saying Media walls Search!', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Media walls Search!');
  });

});

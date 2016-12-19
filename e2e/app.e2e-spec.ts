import { RestaurantesAn2ProdPage } from './app.po';

describe('restaurantes-an2-prod App', function() {
  let page: RestaurantesAn2ProdPage;

  beforeEach(() => {
    page = new RestaurantesAn2ProdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

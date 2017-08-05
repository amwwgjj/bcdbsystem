import { BcdbsystemPage } from './app.po';

describe('bcdbsystem App', () => {
  let page: BcdbsystemPage;

  beforeEach(() => {
    page = new BcdbsystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

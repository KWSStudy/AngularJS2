import { Angular2StudyPage } from './app.po';

describe('angular2-study App', () => {
  let page: Angular2StudyPage;

  beforeEach(() => {
    page = new Angular2StudyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

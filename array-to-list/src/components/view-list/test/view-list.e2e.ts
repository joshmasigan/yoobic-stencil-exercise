import { newE2EPage } from '@stencil/core/testing';

describe('view-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<view-list></view-list>');

    const element = await page.find('view-list');
    expect(element).toHaveClass('hydrated');
  });
});

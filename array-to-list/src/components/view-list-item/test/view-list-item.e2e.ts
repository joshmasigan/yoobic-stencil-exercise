import { newE2EPage } from '@stencil/core/testing';

describe('view-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<view-list-item></view-list-item>');

    const element = await page.find('view-list-item');
    expect(element).toHaveClass('hydrated');
  });
});

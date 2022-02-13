import { newSpecPage } from '@stencil/core/testing';
import { ViewList } from '../view-list';

describe('view-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViewList],
      html: `<view-list></view-list>`,
    });
    expect(page.root).toEqualHtml(`
      <view-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </view-list>
    `);
  });
});

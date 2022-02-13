import { newSpecPage } from '@stencil/core/testing';
import { ViewListItem } from '../view-list-item';

describe('view-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViewListItem],
      html: `<view-list-item></view-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <view-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </view-list-item>
    `);
  });
});

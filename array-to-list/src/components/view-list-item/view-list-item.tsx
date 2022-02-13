import { Component, h, Prop, } from '@stencil/core';

@Component({
  tag: 'view-list-item',
  styleUrl: 'view-list-item.css',
  shadow: true,
})
export class ViewListItem {

  @Prop() text: string

  render() {
    return (
        <li>{this.text}</li>
    );
  }

}

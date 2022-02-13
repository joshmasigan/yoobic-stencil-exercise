import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})

export class MyComponent {

  @Prop() names: string[] = ["George", "Harold", "Susan"];

  render() {
      return(
        <ul>
          Using pre-defined array:
          {this.names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      )
  }
}

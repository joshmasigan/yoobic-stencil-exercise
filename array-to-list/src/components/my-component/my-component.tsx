import { Component, Prop, h } from '@stencil/core';
import { printName } from '../../utils/utils';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})

export class MyComponent {

  @Prop() names: string[] = ["Josh", "Jenny", "Kevin", "Michelle", "Carlos"];

  render() {
      return(
        <div id="listContainer" class="container">
          <h2>Here is a list of names:</h2>
          <ul id="namesList">
            {this.names.map((name, index) => (
              <li id={`${index}`}>{printName(name)}</li>
            ))}
          </ul>          
        </div>

      )
  }
}

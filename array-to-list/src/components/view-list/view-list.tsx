import { Component, Host, h, Prop, State } from '@stencil/core';
// import { ViewListItem } from '../view-list-item/view-list-item';

@Component({
  tag: 'view-list',
  styleUrl: 'view-list.css',
  shadow: true,
})
export class ViewList {
  //
  @Prop() names: string;

  // state for the array of names
  @State() namesArray: Array<any>;

  // Watch for data
  // if namesProp was not a string console.error namesProp's value
  arrayDataWatcher(namesProp) {
    if (typeof namesProp === 'string') {
      this.namesArray = JSON.parse(namesProp);
    } else {
      this.namesArray = namesProp;
      console.error(`names prop was not properly formatted. names prop value = ${this.namesArray}`);
    }
  }

  // Before page renders, grab data from <view-list> prop "names"
  // obtain string whose value is an array of JSON objects
  // parseJSON in to namesArray
  componentWillLoad() {
    this.arrayDataWatcher(this.names);

    // log names param
    console.log(this.names);
     // log namesArray after objects parsed in to array
    console.log(this.namesArray);
  }

  render() {
    return (
      <Host>
        <ul>
          Using props to pass on name values
          {this.namesArray.map(name => (
            // <ViewListItem text={name}/>
            <li>{name}</li>
          ))}
          <li>Hard-coded li element</li>
        </ul>
      </Host>
    );
  }
}

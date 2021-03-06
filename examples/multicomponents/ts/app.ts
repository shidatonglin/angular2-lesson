import {Component} from '@angular/core';

import {Item} from './CheckableItem';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <input-item (onItemAdded)="addItem($event)"></input-item>
    <checkable-item *ngFor="let itemInfo of items; let i = index" [item]="itemInfo" (onItemClicked)="toggle($event, i)">
    </checkable-item>
    <counter [items]="items"></counter>
    `
})
export class AppComponent {

    items: Item[] = [];

    addItem(item: Item) {
        this.items = [...this.items, item];
    }

    toggle(item: Item, index: number) {
        this.items = [
            ...this.items.slice(0, index),
            { isChecked: !item.isChecked, txt: item.txt },
            ...this.items.slice(index + 1)
        ];
    }
}

"use strict";
class backpack {
    constructor(initialItems, initialWeight) {
        this._items = initialItems;
        this._weight = initialWeight;
    }
    get Weight() {
        return this._weight;
    }
    get Items() {
        return this._items;
    }
    set AddItems(wei) {
        if ((this.allItemsWeight() + wei) >= this._weight)
            throw new Error('Backpack is filled');
        this._items.push(wei);
    }
    allItemsWeight() {
        return this.Items.reduce((prevSum, el) => prevSum + el, 0);
    }
    toString() {
        return `Максимальна загальна вага у наплічнику ${this._weight} кг <br> Вага предметів кг ${this._items}`;
    }
}
try {
    let backpack1 = new backpack([], 15);
    backpack1.AddItems = 2;
    backpack1.AddItems = 4;
    backpack1.AddItems = 1;
    backpack1.AddItems = 5;
    document.write(backpack1.toString());
}
catch (error) {
    document.write(error.message);
}

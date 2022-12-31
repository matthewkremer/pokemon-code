
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as savefile from './data/savefile.json';

var items = savefile.items;


class Item extends vscode.TreeItem{

    constructor(
        public readonly label: string,
        public readonly collapsibleState?: vscode.TreeItemCollapsibleState
      ) {
        super(label, collapsibleState);
      }

};

export class NodeInventoryProvider implements vscode.TreeDataProvider<Item> {

    constructor(  ) {

    }
    
    getTreeItem(element: Item): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Item | undefined): vscode.ProviderResult<Item[]> {

        var catch_options: Array<Item> = new Array<Item>();
    
        for (var i = 0; i < items.length; i++){
            catch_options.push( new Item(items[i].name + '  x ' + items[i].amount) );
        }

        return Promise.resolve(catch_options);
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Item | undefined | null | void> = new vscode.EventEmitter<Item | undefined | null | void>();
    
    readonly onDidChangeTreeData: vscode.Event<Item | undefined | null | void> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

};

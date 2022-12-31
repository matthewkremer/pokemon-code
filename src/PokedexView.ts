
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as savefile from './data/savefile.json';
import * as pokedex from './data/pokedex.json';

var pokemon_boxes: typeof pokedex = savefile.pokemon_boxes;

class Pokemon extends vscode.TreeItem{

    constructor(
        public readonly label: string,
        private _id: number,
        public readonly collapsibleState?: vscode.TreeItemCollapsibleState
    ) {
        super(label, collapsibleState);

        this.iconPath = {
            light: path.join(__filename, '..', '..', 'imgs', 'sprites', this._id + '.png'),
            dark: path.join(__filename, '..', '..', 'imgs', 'sprites', this._id + '.png')
        };
    }

};

export class NodePokedexProvider implements vscode.TreeDataProvider<Pokemon> {

    constructor(  ) {

    }
    
    getTreeItem(element: Pokemon): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Pokemon | undefined): vscode.ProviderResult<Pokemon[]> {

        var catch_options: Array<Pokemon> = new Array<Pokemon>();
    
        for (var i = 0; i < pokemon_boxes.length; i++){
            catch_options.push( new Pokemon(pokemon_boxes[i].name, pokemon_boxes[i].id) );
        }

        return Promise.resolve(catch_options);
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Pokemon | undefined | null | void> = new vscode.EventEmitter<Pokemon | undefined | null | void>();
    
    readonly onDidChangeTreeData: vscode.Event<Pokemon | undefined | null | void> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }
};

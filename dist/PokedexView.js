"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePokedexProvider = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const savefile = __importStar(require("./data/savefile.json"));
var pokemon_boxes = savefile.pokemon_boxes;
class Pokemon extends vscode.TreeItem {
    constructor(label, _id, collapsibleState) {
        super(label, collapsibleState);
        this.label = label;
        this._id = _id;
        this.collapsibleState = collapsibleState;
        this.iconPath = {
            light: path.join(__filename, '..', '..', 'imgs', 'sprites', this._id + '.png'),
            dark: path.join(__filename, '..', '..', 'imgs', 'sprites', this._id + '.png')
        };
    }
}
;
class NodePokedexProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        var catch_options = new Array();
        for (var i = 0; i < pokemon_boxes.length; i++) {
            catch_options.push(new Pokemon(pokemon_boxes[i].name, pokemon_boxes[i].id));
        }
        return Promise.resolve(catch_options);
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
}
exports.NodePokedexProvider = NodePokedexProvider;
;
//# sourceMappingURL=PokedexView.js.map
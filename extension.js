// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var fs = require('fs');
var savefile = require('./data/savefile.json');
var extensionPath = vscode.extensions.getExtension('mattkremer.pokemon-code').extensionPath;
var pokedex = {"1":{"name":"Bulbasaur","exp":64},"2":{"name":"Ivysaur","exp":142},"3":{"name":"Venusaur","exp":236},"4":{"name":"Charmander","exp":62},"5":{"name":"Charmeleon","exp":142},"6":{"name":"Charizard","exp":240},"7":{"name":"Squirtle","exp":63},"8":{"name":"Wartortle","exp":142},"9":{"name":"Blastoise","exp":239},"10":{"name":"Caterpie","exp":39},"11":{"name":"Metapod","exp":72},"12":{"name":"Butterfree","exp":178},"13":{"name":"Weedle","exp":39},"14":{"name":"Kakuna","exp":72},"15":{"name":"Beedrill","exp":178},"16":{"name":"Pidgey","exp":50},"17":{"name":"Pidgeotto","exp":122},"18":{"name":"Pidgeot","exp":216},"19":{"name":"Rattata","exp":51},"20":{"name":"Raticate","exp":145},"21":{"name":"Spearow","exp":52},"22":{"name":"Fearow","exp":155},"23":{"name":"Ekans","exp":58},"24":{"name":"Arbok","exp":153},"25":{"name":"Pikachu","exp":112},"26":{"name":"Raichu","exp":218},"27":{"name":"Sandshrew","exp":60},"28":{"name":"Sandslash","exp":158},"29":{"name":"Nidoran-f","exp":55},"30":{"name":"Nidorina","exp":128},"31":{"name":"Nidoqueen","exp":227},"32":{"name":"Nidoran-m","exp":55},"33":{"name":"Nidorino","exp":128},"34":{"name":"Nidoking","exp":227},"35":{"name":"Clefairy","exp":113},"36":{"name":"Clefable","exp":217},"37":{"name":"Vulpix","exp":60},"38":{"name":"Ninetales","exp":177},"39":{"name":"Jigglypuff","exp":95},"40":{"name":"Wigglytuff","exp":196},"41":{"name":"Zubat","exp":49},"42":{"name":"Golbat","exp":159},"43":{"name":"Oddish","exp":64},"44":{"name":"Gloom","exp":138},"45":{"name":"Vileplume","exp":221},"46":{"name":"Paras","exp":57},"47":{"name":"Parasect","exp":142},"48":{"name":"Venonat","exp":61},"49":{"name":"Venomoth","exp":158},"50":{"name":"Diglett","exp":53},"51":{"name":"Dugtrio","exp":142},"52":{"name":"Meowth","exp":58},"53":{"name":"Persian","exp":154},"54":{"name":"Psyduck","exp":64},"55":{"name":"Golduck","exp":175},"56":{"name":"Mankey","exp":61},"57":{"name":"Primeape","exp":159},"58":{"name":"Growlithe","exp":70},"59":{"name":"Arcanine","exp":194},"60":{"name":"Poliwag","exp":60},"61":{"name":"Poliwhirl","exp":135},"62":{"name":"Poliwrath","exp":230},"63":{"name":"Abra","exp":62},"64":{"name":"Kadabra","exp":140},"65":{"name":"Alakazam","exp":225},"66":{"name":"Machop","exp":61},"67":{"name":"Machoke","exp":142},"68":{"name":"Machamp","exp":227},"69":{"name":"Bellsprout","exp":60},"70":{"name":"Weepinbell","exp":137},"71":{"name":"Victreebel","exp":221},"72":{"name":"Tentacool","exp":67},"73":{"name":"Tentacruel","exp":180},"74":{"name":"Geodude","exp":60},"75":{"name":"Graveler","exp":137},"76":{"name":"Golem","exp":223},"77":{"name":"Ponyta","exp":82},"78":{"name":"Rapidash","exp":175},"79":{"name":"Slowpoke","exp":63},"80":{"name":"Slowbro","exp":172},"81":{"name":"Magnemite","exp":65},"82":{"name":"Magneton","exp":163},"83":{"name":"Farfetchd","exp":123},"84":{"name":"Doduo","exp":62},"85":{"name":"Dodrio","exp":161},"86":{"name":"Seel","exp":65},"87":{"name":"Dewgong","exp":166},"88":{"name":"Grimer","exp":65},"89":{"name":"Muk","exp":175},"90":{"name":"Shellder","exp":61},"91":{"name":"Cloyster","exp":184},"92":{"name":"Gastly","exp":62},"93":{"name":"Haunter","exp":142},"94":{"name":"Gengar","exp":225},"95":{"name":"Onix","exp":77},"96":{"name":"Drowzee","exp":66},"97":{"name":"Hypno","exp":169},"98":{"name":"Krabby","exp":65},"99":{"name":"Kingler","exp":166},"100":{"name":"Voltorb","exp":66},"101":{"name":"Electrode","exp":168},"102":{"name":"Exeggcute","exp":65},"103":{"name":"Exeggutor","exp":182},"104":{"name":"Cubone","exp":64},"105":{"name":"Marowak","exp":149},"106":{"name":"Hitmonlee","exp":159},"107":{"name":"Hitmonchan","exp":159},"108":{"name":"Lickitung","exp":77},"109":{"name":"Koffing","exp":68},"110":{"name":"Weezing","exp":172},"111":{"name":"Rhyhorn","exp":69},"112":{"name":"Rhydon","exp":170},"113":{"name":"Chansey","exp":395},"114":{"name":"Tangela","exp":87},"115":{"name":"Kangaskhan","exp":172},"116":{"name":"Horsea","exp":59},"117":{"name":"Seadra","exp":154},"118":{"name":"Goldeen","exp":64},"119":{"name":"Seaking","exp":158},"120":{"name":"Staryu","exp":68},"121":{"name":"Starmie","exp":182},"122":{"name":"Mr-mime","exp":161},"123":{"name":"Scyther","exp":100},"124":{"name":"Jynx","exp":159},"125":{"name":"Electabuzz","exp":172},"126":{"name":"Magmar","exp":173},"127":{"name":"Pinsir","exp":175},"128":{"name":"Tauros","exp":172},"129":{"name":"Magikarp","exp":40},"130":{"name":"Gyarados","exp":189},"131":{"name":"Lapras","exp":187},"132":{"name":"Ditto","exp":101},"133":{"name":"Eevee","exp":65},"134":{"name":"Vaporeon","exp":184},"135":{"name":"Jolteon","exp":184},"136":{"name":"Flareon","exp":184},"137":{"name":"Porygon","exp":79},"138":{"name":"Omanyte","exp":71},"139":{"name":"Omastar","exp":173},"140":{"name":"Kabuto","exp":71},"141":{"name":"Kabutops","exp":173},"142":{"name":"Aerodactyl","exp":180},"143":{"name":"Snorlax","exp":189},"144":{"name":"Articuno","exp":261},"145":{"name":"Zapdos","exp":261},"146":{"name":"Moltres","exp":261},"147":{"name":"Dratini","exp":60},"148":{"name":"Dragonair","exp":147},"149":{"name":"Dragonite","exp":270},"150":{"name":"Mewtwo","exp":306},"151":{"name":"Mew","exp":270}};
var items = savefile.items;
var pokemon_boxes = savefile.pokemon_boxes;
var shown_pokemon = null;
var current_razzberry = false;

function save(){
    fs.writeFile(extensionPath+'/data/savefile.json', JSON.stringify({'items': items, 'pokemon_boxes': pokemon_boxes}));
}

function show_pokemon(){
    var pokemon_list = [];
    for (var key in pokemon_boxes){
        pokemon_list.push(pokedex[key].name + ' (x'+pokemon_boxes[key]+')');
    }
    vscode.window.showQuickPick(pokemon_list).then(function(){
    });
}

function show_inventory(){
    var catch_options = [];
    var catch_options_reverse = {};
    function addItemOption(item){
        if (items[item] > 0){
            catch_options.push(item+' (x'+items[item]+')');
            catch_options_reverse[item+' (x'+items[item]+')'] = item;
        }
    }
    addItemOption('Pokeball');
    addItemOption('Greatball');
    addItemOption('Ultraball');
    addItemOption('Razzberry');
    vscode.window.showQuickPick(catch_options).then(function(choice){

    });
}

// Let's set everything up to start hunting for Pokemon!
function init_tallgrass(){

    var newDecoration = null;

    function _catchAttempt(pokeball){
        var rates = {
            'Pokeball': 255,
            'Greatball': 200,
            'Ultraball': 150
        };
        var rate = rates[pokeball];
        if (current_razzberry){
            rate = rate * .8;
            current_razzberry = false;
        }
        var catch_num = Math.floor(Math.random()*rate);
        var pokemon_num = 255 - pokedex[shown_pokemon].exp;
        if (pokemon_num < 1){
            pokemon_num = 1;
        }
        if (catch_num <= pokemon_num){
            vscode.window.showInformationMessage('You caught the '+pokedex[''+shown_pokemon].name+'! Mom would be proud.');
            if (typeof pokemon_boxes[shown_pokemon] === "undefined"){
                pokemon_boxes[shown_pokemon] = 0;
            }
            pokemon_boxes[shown_pokemon]++;
            save();
            vscode.window.activeTextEditor.setDecorations(newDecoration, []);
            shown_pokemon = null;
        }else{
            var fleeCheck = Math.floor(Math.random()*1000);
            if (fleeCheck < pokedex[shown_pokemon].exp){
                vscode.window.showErrorMessage('Sad day, '+pokedex[shown_pokemon].name+' ran away...');
                vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                shown_pokemon = null;
            }else{
                vscode.window.showWarningMessage('Oh no, the '+pokedex[''+shown_pokemon].name+' broke free!', {}, ...['Try Again']).then(function(chosen){
                    if (chosen == 'Try Again'){
                        _catch();
                    }else{
                        vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                        shown_pokemon = null;
                    }
                });
            }
        }
    }

    function _catch(){
        var catch_options = [];
        var catch_options_reverse = {};
        function addItemOption(item){
            if (items[item] > 0){
                catch_options.push(item+' (x'+items[item]+')');
                catch_options_reverse[item+' (x'+items[item]+')'] = item;
            }
        }
        addItemOption('Pokeball');
        addItemOption('Greatball');
        addItemOption('Ultraball');
        if (!current_razzberry){
            addItemOption('Razzberry');
        }
        vscode.window.showQuickPick(catch_options).then(function(choice){
            if (choice){
                choice = catch_options_reverse[choice];
                items[choice]--;
                save();
                switch(choice){
                    case 'Pokeball':
                    case 'Greatball':
                    case 'Ultraball':
                        _catchAttempt(choice)
                        break;
                    case 'Razzberry':
                        current_razzberry = true;
                        vscode.window.showInformationMessage('You fed the Razzberry to '+pokedex[''+shown_pokemon].name+'!', {}, ...['Next']).then(function(chosen){
                            _catch();
                        });
                        break;
                }
            }else{
                vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                shown_pokemon = null;
            }
        });
    }

    function _walk(){

        if (shown_pokemon !== null){
            return;
        }

        var n = Math.floor(Math.random()*40);
        if (n==1 || n==2){
            shown_pokemon = Math.floor(Math.random()*151);
            vscode.window.showInformationMessage('A wild '+pokedex[''+shown_pokemon].name+' appeared!', {},...['Catch']).then(function(chosen){
                if (chosen=="Catch"){
                    _catch();
                }else{
                    vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                    shown_pokemon = null;
                }
            });
            newDecoration = vscode.window.createTextEditorDecorationType({
                gutterIconSize: 'contain',
                gutterIconPath: vscode.Uri.parse(extensionPath + '/imgs/sprites/'+shown_pokemon+'.png')
            });
            var opts = {
                range: new vscode.Range(vscode.window.activeTextEditor.selection.active.line+1-1, 0, vscode.window.activeTextEditor.selection.active.line+1-1, 0),
                hoverMessage: ""
            }
            vscode.window.activeTextEditor.setDecorations(newDecoration, [opts]);
        }else if (n==3){
            var item_drop_possibilities = ['Pokeball', 'Pokeball', 'Pokeball', 'Pokeball', 'Pokeball', 'Greatball', 'Greatball', 'Ultraball', 'Razzberry'];
            var item_drops = [];
            item_drops.push(item_drop_possibilities[Math.floor(Math.random()*item_drop_possibilities.length)]);
            item_drops.push(item_drop_possibilities[Math.floor(Math.random()*item_drop_possibilities.length)]);
            item_drops.push(item_drop_possibilities[Math.floor(Math.random()*item_drop_possibilities.length)]);
            vscode.window.showInformationMessage('You picked up: '+item_drops[0]+', '+item_drops[1]+', and '+item_drops[2]+'!').then(function(){});
            items[item_drops[0]]++;
            items[item_drops[1]]++;
            items[item_drops[2]]++;
            save();
        }
    }
    
    vscode.window.onDidChangeTextEditorSelection(_walk, this);

}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "pokemon-code" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.startPokemonCode', function () {
        // The code you place here will be executed every time your command is executed

        init_tallgrass();

        // Display a message box to the user
        vscode.window.showInformationMessage('Your Pokemon journey has begun!', {});

    });

    var disposable2 = vscode.commands.registerCommand('extension.showPokemon', function () {
        // The code you place here will be executed every time your command is executed

        show_pokemon();

    });

    var disposable3 = vscode.commands.registerCommand('extension.showInventory', function () {
        // The code you place here will be executed every time your command is executed

        show_inventory();

    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
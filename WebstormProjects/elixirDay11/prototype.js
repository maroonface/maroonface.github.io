/**
 * Created by rv on 14/7/16.
 */
function user(){
    this.name = '';
    this.life = 100;
    this.givelife = function giveLifeFunc(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + ' Gave life to ' +targetPlayer.name);
    }
}

var ravi = new user();
var kuldeep = new user();

ravi.name = 'ravi';
kuldeep.name = 'kuldeep';

ravi.givelife(kuldeep);

console.log(ravi.life);
console.log(kuldeep.life);

user.prototype.magic = 60;

user.prototype.uppercut = function uppercut(targetplayer){
    targetplayer.life -= 20;
    console.log(this.name + ' uppercutted '+ targetplayer.name);
}

ravi.uppercut(kuldeep);

console.log(ravi);
console.log(kuldeep);
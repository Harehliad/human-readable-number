module.exports = function toReadable (numbar) {
    let x, xx, xxx = 0;
    let str = "";
    let oneDischarge = [' ' , 'one' , 'two' , 'three' , 'four' , 'five' , ' six' , 'seven' , 'eight' , 'nine' , 'ten' , 'eleven' , 'twelve' , 'thirteen' , 'fourteen' , 'fifteen' , 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen' , 'zero'];
    let twoDischarge = [' ' , 'ten' , 'twenty' , 'thirty' , 'forty' , 'fifty' , 'sixty' , 'seventy' , 'eighty' , 'ninety'];
    if ( numbar >= 100) {
        xxx = Math.floor(numbar/100);
        xx = Math.floor((numbar-100*xxx)/10);
        x = numbar - 100*xxx - 10*xx;
        if ((numbar-100*xxx) >=20){
        str = (oneDischarge[xxx] + ' ' + 'hundred' + ' ' + twoDischarge[xx] + ' ' + oneDischarge[x]).trim().replace(/\s+/g, ' ');
    } else {
        str = (oneDischarge[xxx] + ' ' + 'hundred' + ' ' + oneDischarge[numbar-100*xxx]).trim().replace(/\s+/g, ' ');
    }
    }
    if ( numbar >= 20 && numbar < 100) {
        xx = Math.floor(numbar/10);
        x = numbar - 10*xx;
        str =(twoDischarge[xx] + ' ' + oneDischarge[x]).trim().replace(/\s+/g, ' ');
    }
    if (numbar < 20 && numbar > 0) {
        x = numbar;
        str =(oneDischarge[x]).trim();
    }
    if (numbar == 0) {
        x = 20;
        str =(oneDischarge[x]).trim();
    }
    return (str);
}

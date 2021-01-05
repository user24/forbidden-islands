class IslandConverter {
  static _alphabet = 'abcdefghijklmnopqrstuvwxyz-_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  static _char2bin = (char) => {
    return ('000000' + this._alphabet.indexOf(char).toString(2)).slice(-6);
  };

  static island2String = (isle) => {
    let maxRowLen = 0;
    const binStrs = [].concat.apply([], isle.map(row => {
      if (row.length > maxRowLen) {
        maxRowLen = row.length;
      }
      return row.join('').match(/.{1,6}/g).map(binStr => (binStr + '000000').slice(0, 6));
    }));
  
    const chars = binStrs.map(bin => {
      return this._alphabet.charAt(parseInt(bin, 2));
    });
  
    return this._alphabet.charAt(maxRowLen) + chars.join('');
  }

  static string2island = (str) => {
    const rowLength = this._alphabet.indexOf(str.charAt(0));
    const list = str.slice(1).split('').map(this._char2bin).map(bin6 => bin6.split(''));
    const island = [];

    for (let i = 0; i < list.length; i++) {
      let row = [];
      let j = i;
      while (row.length < rowLength) {
        // Add all the binary this letter encoded
        row = row.concat(list[j]);
        if (row.length > rowLength) {
          // This is now too long; trim it down to length
          row = row.slice(0, rowLength);
          if (j > i) {
            // and don't process this letter again
            i++;
          }
        }
        // Get ready to look ahead to the next letter
        j++;
      }
      island.push(row);
    }
    return island;
  }
}

const island = [
  [0,0,0,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,0,0],
  [0,1,1,1,0,1,1,1,0],
  [1,1,1,0,0,0,1,1,1],
  [1,1,0,0,0,0,0,1,1]
];

const str = IslandConverter.island2String(island);
console.log(str, IslandConverter.string2island(str).map(row=>row.join()));

//export default IslandConverter;
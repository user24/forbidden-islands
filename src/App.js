import React, { PureComponent } from 'react';
import './App.css';
import Islands from './data/islands.json';
import IslandConverter from './islandConverter';

const Island = (props) => {
  const sumTiles = props.tiles.reduce((a, b) => a.concat(b)).reduce((p,c) => p + (c===1 ? 1 : 0));
  const code = props.code || IslandConverter.island2String(props.tiles);
  const href = `?i=${code}`;

  const toggleTile = (x, y) => {
    const newTiles = props.tiles;
    newTiles[y][x] = newTiles[y][x] ? 0 : 1;
    console.log(newTiles);
  };

  return (<div className='layout' key={props.name}>
    <h3><a href={href}>{props.name}</a></h3>
    <div className='sum'>({sumTiles} tiles)</div>
    <div className='layout-tiles'>
      {props.tiles.map((row, y) => <div className='tile-row' key={`tile-row-${y}`}>{row.map((cell,x) => {
        let className = 'tile';
        if (cell===1) {
          className += ' filled';
        } else if (cell===2) {
          className += ' impassable';
        }
        const key = `tile-cell-${x},${y}`;
        return <div onClick={() => toggleTile(x, y)} key={key} className={className} />
      })}</div>)}
    </div>
  </div>);
}

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      islands: Islands
    }
  }

  renderIslandEditor(islandString) {
    const island = {
      name: `Island ${islandString}`,
      code: islandString,
      editable: true,
      tiles: IslandConverter.string2island(islandString)
    };

    return (
      <React.Fragment>
        <h1>Forbidden Island Map Editor</h1>
        <div className='layouts'>
          <Island
          {...island}
        />
        </div>
      </React.Fragment>
    );
  }

  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const island = urlParams.get('i');
    return (
      <div className='islands'>
        {island ? this.renderIslandEditor(island) : null}
        <h1>Sample Islands</h1>
        <div className='layouts'>
          {this.state.islands.map(island => <Island
            tiles={island.tiles}
            name={`'${island.name}'`}
            />)}
        </div>
      </div>
    );
  }
}

export default App;

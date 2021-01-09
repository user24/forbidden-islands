import React, { PureComponent } from 'react';
import './App.css';
import Islands from './data/islands.json';
import IslandConverter from './islandConverter';

const Island = (props) => {
  const sumTiles = props.tiles.reduce((a, b) => a.concat(b)).reduce((p,c) => p + (c===1 ? 1 : 0));
  const code = props.code || IslandConverter.island2String(props.tiles);
  const href = `?i=${code}`;
  const islandClassName = props.editable ? 'layout-tiles editable': 'layout-tiles';

  return (<div className='layout' key={props.name}>
    <h3><a href={href}>{props.name}</a></h3>
    <div className='sum'>({sumTiles} tiles)</div>
    <div className={islandClassName}>
      {props.tiles.map((row, y) => <div className='tile-row' key={`tile-row-${y}`}>{row.map((cell,x) => {
        let className = 'tile';
        if (cell===1) {
          className += ' filled';
        } else if (cell===2) {
          className += ' impassable';
        }
        const key = `tile-cell-${x},${y}`;
        return <div onClick={() => props.editable ? props.toggleTile(x, y) : null} key={key} className={className} />
      })}</div>)}
    </div>
  </div>);
}

class App extends PureComponent {

  constructor(props) {
    super(props);

    const islands = {};
    Islands.forEach(island => {
      islands[island.name] = island;
    });
    const urlParams = new URLSearchParams(window.location.search);
    const editIslandString = urlParams.get('i');
    let editIsland = false;
    if (editIslandString) {
      const name = this.getIslandName(editIslandString);
      editIsland = {
        name,
        code: editIslandString,
        editable: true,
        tiles: IslandConverter.string2island(editIslandString)
      };
    }

    this.state = { islands, editIsland };
  }

  getIslandName(code) {
    return `Island ${code}`;
  }

  toggleTile = (x, y) => {
    const editIsland = {...this.state.editIsland};
    editIsland.tiles[y][x] = editIsland.tiles[y][x] ? 0 : 1;
    editIsland.code = IslandConverter.island2String(editIsland.tiles);
    editIsland.name = this.getIslandName(editIsland.code);
    this.setState({ editIsland });
  }

  renderIslandEditor() {
    return (
      <React.Fragment>
        <h1>Forbidden Island Map Editor</h1>
        <div className='layouts'>
          <Island
          {...this.state.editIsland}
          toggleTile={this.toggleTile}
        />
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className='islands'>
        {this.state.editIsland ? this.renderIslandEditor() : null}
        <h1>Sample Islands</h1>
        <div className='layouts'>
          {Object.keys(this.state.islands).map(islandKey => <Island
            tiles={this.state.islands[islandKey].tiles}
            name={`'${this.state.islands[islandKey].name}'`}
            />)}
        </div>
      </div>
    );
  }
}

export default App;

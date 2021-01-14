import React, { PureComponent } from 'react';
import './App.css';
import Islands from './data/islands.json';
import IslandConverter from './utils/islandConverter';
import Island from './components/island';

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

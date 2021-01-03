import React, { PureComponent } from 'react';
import './App.css';
import Layouts from './data/layouts.json';

const Layout = (layout) => {

  const sumTiles = layout.tiles.reduce((a, b) => a.concat(b)).reduce((p,c) => p + (c===1 ? 1 : 0));

  return (<div className='layout'>
    <h3>{layout.name}</h3>
    <div className='sum'>({sumTiles} tiles)</div>
    <div className='layout-tiles'>
      {layout.tiles.map(row => <div className='tile-row'>{row.map(cell => {
        let className = 'tile';
        if (cell===1) {
          className += ' filled';
        } else if (cell===2) {
          className += ' impassable';
        }
        return <div className={className} />
      })}</div>)}
    </div>
  </div>);
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Forbidden Island Layouts</h1>
        <div className='layouts'>
          {Layouts.map(Layout)}
        </div>
      </div>
    );
  }
}

export default App;

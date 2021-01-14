import IslandConverter from '../utils/islandConverter';

const Island = (props) => {
  const sumTiles = props.tiles.reduce((a, b) => a.concat(b)).reduce((p,c) => p + (c===1 ? 1 : 0));
  const code = props.code || IslandConverter.island2String(props.tiles);
  const href = `?i=${code}`;
  const islandClassName = props.editable ? 'layout-tiles editable': 'layout-tiles';
  const tiles = props.tiles;
  if (tiles[0].length < 24) {

  }

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

export default Island;
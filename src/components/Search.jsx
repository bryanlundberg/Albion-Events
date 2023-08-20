import '../stylesheets/Input.css'

export default function Search() {

  return (
    <>
      <div className='search-container'>
        <input type='text' id="search-bar" className='search-bar' placeholder="Enter a player's name here" autocomplete="off"></input>
        <span className='gg-search'></span>
      </div>
    </>
  )
}
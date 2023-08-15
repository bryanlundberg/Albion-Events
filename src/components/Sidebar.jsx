

export default function Sidebar({}) {
  return (
    <>
      <div>Event details</div>
      <div className="sidebar">
        <div className="container-contribuitor">
          <div className="contribuitor-card">
            <div>
              <img className="contribuitor-avatar" src="#" alt="playerName avatar in game" />
            </div>
            <div className="contribuitor-info">
              <div>Player Name [Guild Name]</div>
              <div>Item Power: 1531</div>
            </div>
          </div>
          <div className="contribuitor-set">
            <img className="contribuitor-item" src="#" alt="playerName main weapon" />
            <img className="contribuitor-item" src="#" alt="playerName main helmet" />
            <img className="contribuitor-item" src="#" alt="playerName main robe" />
            <img className="contribuitor-item" src="#" alt="playerName main shoes" />
          </div>
        </div>
      </div>
    </>
  )
}
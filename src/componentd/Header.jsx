const Header = () => {
    return(
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
    )
}


export default Header
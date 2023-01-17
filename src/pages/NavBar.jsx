import FilterListIcon from '@mui/icons-material/FilterList';

const NavBar = () => {
    return (
        <section className="nav-bar" id="nav-bar">
            <nav>
                <ul>
                    <li className="button">
                        <span className="fas fa-bars"></span>
                    </li>
                    <div className="items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="contact">Contact</a></li>
                    </div>
                    <li className='search-bx'>
                        <input type="search" placeholder='Search by product and services' />
                        <span className='fa fa-search'></span>
                    </li>
                    <li className="filter-bx">
                        <FilterListIcon />
                        <span>Filter</span>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default NavBar
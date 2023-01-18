import React from 'react'
import { NavBar } from '../filePaths';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import Pagination from '../components/Pagination';


const Products = ({ categories, products, totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    return (
        <>
            <NavBar />
            <section className="products" id="products">
                <div className="navHeader">
                    <div className="buttons">
                        <button className='navButtons'>All</button>
                        {
                            categories.map((value) => {
                                return <button className='navButtons'>{value.name}</button>
                            })
                        }
                    </div>
                </div>
                <div className='prod-header'>
                    <div className='result-number'>{totalPosts}+ results</div>
                    <div className="actions">
                        <div className="search-bx">
                            <span className='fa fa-search'></span>
                        </div>
                        <div className='sort-bx'>
                            <SortIcon />
                            <span>Sort</span>
                        </div>
                        <div className='filter-bx'>
                            <FilterListIcon />
                            <span>Filter</span>
                        </div>
                    </div>
                </div>
                <div className="products-bx">
                    <div className="products-tabs">
                        <button className='active'>All</button>
                        <button>Auction</button>
                        <button>Buy It Now</button>
                    </div>
                    <div className='products-container'>
                        <div className="row">
                            {
                                products.map((product, key) => {
                                    return (
                                        <div className="prod-item col-sm-6 col-md-3">
                                            <div className="prod-imgbx" key={key}>
                                                <img src={product.images[0]} alt="" />
                                                <div className="prod-txt">
                                                    <h4>{product.title}</h4>
                                                    <span>{product.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    )
}

export default Products
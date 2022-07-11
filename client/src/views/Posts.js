import React , { useState , useEffect }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from '../components/common/title/Title';
import PostItem from '../components/posts/PostItem';
import { getPosts } from '../actions/post';
import { getBlogs } from '../actions/post';

// import { getBlogs } from '../../actions/blog';

const Posts = ({ getPosts, getBlogs  , post : {posts} , auth } ) => {
    useEffect(() => {
        if (auth.isAuthenticated) 
            getPosts();
         else
            getBlogs();
    }, [getPosts]);
        return (
            <>
                <Title 
                        title={"Blog"}
                        subTitle={
                            <>
                                <p className='text-white text-center'>{"You can be free. You can live and work anywhere in the world. You can be independent from routine and not answer to anybody."}</p>
                            </>
                        }
                    />

                <div className="">
                    <div className=" justify-items-center grid relative ">
                        {auth.isAuthenticated && 
                            <Link to="/addBlog" className=" mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className=" flex inline items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-base">Add Blog</p>
                                </span>
                            </Link>

                        }
                    
                        <div className="n-container overflow-y-auto">
                            {posts.map((post) => (
                                <PostItem key={post._id} post={ post } />
                            //    console.log(post)
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }


    
Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPosts , getBlogs})(Posts);

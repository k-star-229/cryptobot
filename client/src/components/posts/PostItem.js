// import React from 'react';
import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
const PostItem = ({ post  : {_id , image , title , content ,  tag , date} }) => {
        return ( 
            <div className="bg-third grid grid-cols-5 gap-3 relative gap-10 mt-20 mb-20 p-20" style={{
                borderTopLeftRadius : '30%',
                borderTopRightRadius: '30%',
            }}>
                {/* Image part */}
                <div className='col-span-2 mt-5'>
                    <div className=" mb-4  hover:drop-shadow-2xl ">
                        <img src={`http://localhost:5000/public/image/${image}`} className="max-w-full h-auto rounded-lg" style={{height : '500' , width : '500px'}} />
                    </div>
                </div>
                {/* Content part */}
                <div className='col-span-3  gap-5 mt-5'>
                    <div className="relative inline flex gap-5">
                        <img className="w-10 h-10 rounded-full" src="https://miro.medium.com/fit/c/88/88/1*bSML3n0nRrrc1hWpX2IFjw.jpeg" alt="" />
                        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <p className='text-white text-lg inline-block align-bottom'>Posted on { formatDate(date)}</p>
                    </div>
                    
                    <div className='relative inline flex gap-3 mt-3'>
                        <p className='text-white text-3xl  align-bottom'>{title }</p>
                    </div>

                    <div className='relative inline flex gap-3 mt-3'>
                        <p className='text-white text-lg  align-bottom' style={{
                            display: 'block',
                            textOverflow: 'ellipsis',
                            // wordWrap: 'break-word',
                            overflow: 'auto',
                            maxHeight: '18em',
                            lineHeight: '1.8em',
                            scrollbarWidth : '20px'
                            }}>
                            { content }
                        </p>
                    </div>
                    <div className=" flex gap-3 index-x-0 mt-5"> 
                        <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            {tag}
                        </button>
                    </div>
                </div>
            </div>
        )
}
    

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
//   addLike: PropTypes.func.isRequired,
//   removeLike: PropTypes.func.isRequired,
//   deletePost: PropTypes.func.isRequired,
//   showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(
  PostItem
);

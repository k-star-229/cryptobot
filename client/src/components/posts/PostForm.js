import React, { useState, useEffect } from "react";
import Title from '../common/title/Title';
import { Link, Navigate  , useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { addPost } from '../../actions/post';
 
function PostForm({ addPost }) {
    //check Router
    // const history = useHistory();
    //Upload Image control part
    const [image, setImage] = useState({ preview: "", data: "" }); 
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        image : "",
        title: "",
        content: "",
        tag : "",
    });
    const handleChange = (e) => { 
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                data: e.target.files[0]
            });
            setFormData({ ...formData, image: e.target.files[0] });
            setShow(true);
            // console.log(e.target.files[0]);
            // console.log(formData);
        }
        // var file = e.target.files[0];
        // var reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = function () {
        //     setImage({ preview: reader.result, raw: e.target.files[0] });
        // }.bind(this);
    }

    const handleReset = () => { 
        setImage("");
        setShow(false);
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log(router);
    }
    
    const onSubmit =  async(e) => {
        e.preventDefault();
        // console.log(formData.image)
        let sendData = new FormData();
        sendData.append('image', formData.image);
        sendData.append('title', formData.title);
        sendData.append('content', formData.content);
        sendData.append('tag', formData.tag);
        addPost(sendData)
        // axios.post('/api/posts', sendData)
        //      .then(res => {
        //         console.log(res);
        //      })
        //      .catch(err => {
        //         console.log(err);
        //      });
        // setFormData("");
    }

    return (
        <>
            <Title title={"Create your blog"} />
            <div className="bg-third relative mt-20 mb-20 w-3/4 p-20 m-auto" style={{
                    borderBottomLeftRadius:  '50%',
                    borderBottomRightRadius: '50%',
                    borderTopLeftRadius : '100%',
                    borderTopRightRadius: '100%',
                }}>
            {/* <div className="pt-20 "> */}
            <form className="p-20" onSubmit={onSubmit}>
                <div className="sm:flex">
                    <div className="sm:w-1/2 w-5/6">
                    <p className="text-white">Select Image for your blog </p>
                    <div className="border-[#949494] w-3/4 border-2 mt-3 rounded-2xl p-10 border-dashed cursor-pointer">
                        {image.preview ?
                            (<img src={ image.preview }  className="bg-third" alt="Image"  width={'400'} height={'400'} />) :
                            (<label>
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <img src="/img/upload_Image.png"/>
                                    <p className="text-center text-white text-3xl mt-4">
                                        Drag & drop files
                                    </p>
                                </div>
                                <input type="file" className="opacity-0"  onChange = {handleChange}/>
                            </label>)}
                            {show &&
                                <div className='p-2'>
                                    <button class="inline-flex items-center px-4 py-2 text-white text-base font-medium rounded-xl pt-2" onClick={handleReset} style={{ float: 'right', right: '0px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>
                                        Restore
                                    </button>
                                </div>
                            }
                    </div>

                    </div>
                    <div className="sm:w-1/2 text-white mt-10 sm:mt-0">
                        <div>
                            <p>Title</p>
                            <input
                                        type="text"
                                        className="py-3 px-4 w-3/4  bg-[#24303E] mt-2 rounded border-b-4 border-[#FD6379]"
                                        placeholder="e.g. What Trading bot bring to us?"
                                        name="title"
                                        onChange={onChange} 
                                        required
                                    />
                        </div>
                    
                        <div className="mt-5">
                            <p className="text-white">Description</p>
                            <textarea
                                className="text-white p-4 h-32 w-3/4 bg-[#24303E]  mt-3 rounded border-b-4 border-[#FD6379] "
                                placeholder="e.g. Hello. My name is ..."
                                onChange={onChange}
                                        name="content"
                                        
                            />  
                        </div>    
                                
                        <div className="mt-5">
                            <p>Tag</p>
                            <input
                                        type="text"
                                        className="py-3 px-4  w-3/4 bg-[#24303E] mt-2 rounded border-b-4 border-[#FD6379]"
                                        placeholder="e.g. Development  , Social , Effect , Victim?"
                                        name="tag"
                                        onChange={onChange}
                                        required
                            />
                        </div>
                                
                        <div className="mt-10 grid">
                            <input type="submit" class=" w-3/4  text-white text-xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" value={"CREATE"} />
                        </div>  
                    </div>
                </div>
            </form>
            </div>
        {/* </div> */}
    </>
  );
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    post: state.post
});

export default connect(mapStateToProps, { addPost })(PostForm);



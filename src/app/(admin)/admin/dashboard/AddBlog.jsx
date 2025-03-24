'use client';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef } from 'react';
import FormLoader from '@/components/FormLoader/FormLoader';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';

export default function AddBlog({ blogData, setBlogData, disableBtn, setDisableBtn, error, setError, loading, setLoading }) {
  const editorRef = useRef();
  const imageref = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  useEffect(() => {
    if (blogData.title && blogData.metaTitle && blogData.metaDescription && blogData.image) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [blogData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const content = editorRef.current?.getInstance().getHTML();
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('metaTitle', blogData.metaTitle);
    formData.append('metaDescription', blogData.metaDescription);
    formData.append('content', content);
    formData.append('markdownContent', markdownContent);
    if (blogData.image) {
      formData.append('image', blogData.image);
    }

    try {
      toast.promise(
        axios
          .post("/api/post-blogs", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log("Blog Posted Successfully", response.data);
            if (response.data.success) {
              setBlogData({
                title: "",
                content: "",
                metaTitle: "",
                metaDescription: "",
              });
              imageref.current.value = '';
              setError('');
              setLoading(false);
              editorRef.current?.getInstance().setMarkdown("");
            }
          })
          .catch((error) => {
            console.log("Failed to Post  :- ", error.response.data.message);
            setLoading(false);
            throw error;
          }),
        {
          loading: "Publising Blog...",
          success: "Blog Post",
          error: "Failed to Post blog.",
        }
      );
    } catch (error) {
      console.log(error);
      setError('Internal server error');
      setLoading(false);
    }
    finally {
      setLoading(false);
    }
  };

  function handleReset(e) {
    e.preventDefault();
    setBlogData({
      title: "",
      content: "",
      metaTitle: "",
      metaDescription: "",
    });
    imageref.current.value = '';
    editorRef.current?.getInstance().setMarkdown("");
  }

  return (
    <section className='write-blog-container'>
      <h2>Start Writing Your Blogs.👇</h2>
      <div className="write-blog-header">
        <div className="write-blog-input-container">
          <label htmlFor="title">Blog Title <span>*</span> </label>
          <input
            type="text"
            name='title'
            id='title'
            placeholder='Your blog title'
            value={blogData.title}
            onChange={handleChange} />
        </div>
        <div className="write-blog-input-container">
          <label htmlFor="blogImg">Blog Image<span>*</span></label>
          <input
            type="file"
            name='image'
            id='blogImg'
            ref={imageref}
            onChange={handleFileChange} />
        </div>
        <div className="write-blog-input-container">
          <label htmlFor="metaTitle">Meta Title <span>*</span></label>
          <input
            type="text"
            name='metaTitle'
            id='metaTitle'
            placeholder='Blog Meta Title'
            value={blogData.metaTitle}
            onChange={handleChange} />
        </div>
        <div className="write-blog-input-container">
          <label htmlFor="metaDesc">Meta Description <span>*</span></label>
          <textarea
            name="metaDescription"
            id="metaDesc"
            placeholder='Meta Description...'
            rows={5}
            value={blogData.metaDescription}
            onChange={handleChange} ></textarea>
        </div>
      </div>
      <div className="write-blog-content">
        <Editor
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
          placeholder='Start Writing Your Blog Here...'
        />
      </div>
      <div className="write-blog-footer">
        <button type='reset' onClick={handleReset}>Reset</button>
        <button
          onClick={handleSubmit}
          disabled={disableBtn}
          style={{ cursor: `${disableBtn ? 'not-allowed' : 'pointer'}` }}
        >{loading ? <FormLoader /> : "Submit"}</button>
      </div>
      <Toaster />
    </section>
  );
}


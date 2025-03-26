'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '@/components/Navbar/Navbar';
import ContactUs from '@/components/Contact_us/ContactUs';
import Footer from '@/components/Footor/Footer';
import FormLoader from '@/components/FormLoader/FormLoader';

export default function BlogContent({ blogId }) {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchBlog() {
            try {
                const res = await axios.get(`/api/single-blog/${blogId}`);
                setBlog(res.data.data);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError(err.response?.data?.message || "Failed to load blog");
            } finally {
                setLoading(false);
            }
        }

        if (blogId) {
            fetchBlog();
        }
    }, [blogId]);

    const bufferToBase64 = (buffer) => {
        return `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
    };
    const base64Image = blog?.blog_img?.data
        ? bufferToBase64(blog?.blog_img?.data)
        : '/images/blogs/blog-image-01.jpeg';

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    useEffect(() => {
        const recordVisit = async () => {
            try {
                await axios.post('/api/record-visit', { blogId });
            } catch (error) {
                console.error('Failed to record visit:', error);
            }
        };
        recordVisit();
    }, [blogId]);


    return (
        <>
            <Navbar />
            <section className='section' style={{ backgroundColor: "white", marginTop: "-53px" }}>
                {
                    loading ? <FormLoader /> : (
                        <div className="single-blog-page-container">
                            <div className="single-blog-page-title">
                                <h1>{blog.blog_title}</h1>
                            </div>
                            {/* <div className="blog-img">
                        <Image src={base64Image} width={800} height={345} alt='How to Clean Carpets Without Professional Help' />
                    </div> */}

                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.blog_content }}>

                            </div>
                        </div>
                    )
                }
            </section>

            <ContactUs />
            <Footer />
        </>
    )
}

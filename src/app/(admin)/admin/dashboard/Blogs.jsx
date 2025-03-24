'use client'
import Image from 'next/image'
import Link from 'next/link'
import Loader from "@/components/Loader/Loader";

export default function Blogs({ loading, blog }) {

  // Function to convert buffer to base64 string
  const bufferToBase64 = (buffer) => {
    return `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
  };

  return (
    <section className='admin-blogs-page'>
      {loading ? <Loader /> : (
        <div className="admin-blogs-container">
          {blog?.data?.map((data, index) => {
            // Convert buffer to base64 image
            const base64Image = data.blog_img?.data
              ? bufferToBase64(data.blog_img.data)
              : '/images/blogs/blog-image-01.jpeg';

            return (
              <div className="blog-cards-container" key={index}>
                <div className="blog-card-body">
                  <div className="blog-card-img">
                    <Image
                      src={base64Image}
                      width={400}
                      height={163}
                      alt='blog'
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="blog-title">
                    <h2>
                      <Link href={`/blogs/${data.blog_slug}`}>
                        {data.blog_title}
                      </Link>
                    </h2>
                  </div>
                  <div className="blog-description">
                    <p>
                      {data.metaDesc}
                    </p>
                  </div>
                  <div className="blog-btn">
                    <Link href={`/blogs/${data.blog_slug}`}>
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

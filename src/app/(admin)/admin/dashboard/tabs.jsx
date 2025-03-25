'use client'
import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import Blogs from './Blogs'
import AddBlog from './AddBlog'
import Image from 'next/image'
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";


export default function Tabs() {
    const tabConfig = [
        {
            tabName: "Dashboard",
            tabComponent: Dashboard,
            tabIcon: "hgi hgi-stroke hgi-dashboard-square-03",
        },
        {
            tabName: "Blogs",
            tabComponent: Blogs,
            tabIcon: "hgi hgi-stroke hgi-file-01",
        },
        {
            tabName: "Add Blog",
            tabComponent: AddBlog,
            tabIcon: "hgi hgi-stroke hgi-license-draft",
        }
    ]
    const [selectedTab, setSelectedTab] = useState(1)
    const ActiveTab = tabConfig[selectedTab].tabComponent
    const [collapseMenu, setCollapseMenu] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [disableBtn, setDisableBtn] = useState(true)
    const [blogData, setBlogData] = useState({
        title: "",
        content: "",
        image: "",
        metaTitle: "",
        metaDescription: "",
    })
    const [blog, setBlog] = useState([])

    async function handleLogOut() {
        toast.promise(
            axios
                .post("/api/logout", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    // console.log("Admin Login Successfully", response);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log("Login Failed :- ", error.response.data.message);
                    throw error;
                }),
            {
                loading: "Logging Out...",
                success: "Admin Log-Out Successful",
                error: "Error while login. Please try again.",
            }
        );
    }
    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true)
            try {
                const res = await axios.get('/api/get-blogs')
                setBlog(res.data)
            } catch (error) {
                console.error("Error fetching blogs:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs()
    }, [selectedTab === 1])
    
    return (
        <div className="dashboard-wraper">
            <aside className={`aside-bar ${collapseMenu ? 'collapse-menu' : "opn-menu"} `}>
                <div className="aside-bar-container">
                    <div className="aside-logo-container">
                        {/* <span>Mahesh Carpets</span> */}
                        <Image src='/images/logo/logo-01.jpeg' width={200} height={100} alt='logo' />
                    </div>
                    <div className="aside-tabs-container">
                        {
                            tabConfig.map((tabs, idx) => (
                                <div
                                    className={`aside-tabs ${selectedTab === idx ? 'active-tab' : ""}`}
                                    key={idx}
                                    onClick={() => setSelectedTab(idx)}
                                >
                                    <i className={tabs.tabIcon}></i>
                                    <span>
                                        {tabs.tabName}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="aside-collapse-btn-container" onClick={() => setCollapseMenu(!collapseMenu)}>
                        <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                    </div>
                </div>
            </aside>
            <section className='main-content'>
                <div className="main-wraper">
                    <div className="main-content-header">
                        <div className="main-content-header-wraper">
                            <div className="content-tab-name">
                                <h1>{tabConfig[selectedTab].tabName}</h1>
                            </div>
                            <div className="content-other-icons">
                                <div className="content-icon-wraper">
                                    <div className="content-icons">
                                        <i className="hgi hgi-stroke hgi-user"></i>
                                        <span>Name</span>
                                    </div>
                                    <div className="content-icons" onClick={handleLogOut}>
                                        <i className="hgi hgi-stroke hgi-logout-03"></i>
                                        <span>Logout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-content-body">
                        <ActiveTab
                            blogData={blogData}
                            setBlogData={setBlogData}
                            loading={loading}
                            setLoading={setLoading}
                            error={error}
                            setError={setError}
                            disableBtn={disableBtn}
                            setDisableBtn={setDisableBtn}
                            blog={blog}
                            setBlog={setBlog}
                        />
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    )
}

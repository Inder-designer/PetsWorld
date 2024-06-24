import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Blog.css";

const Blog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const blogs = [
    {
      id: 1,
      title: "10 Best Dog Treats in India in 2023",
      imageUrl: "./assets/img/blog/Blog1.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cupiditate exercitationem, iusto harum, aliquam vero consequatur consectetur deserunt perspiciatis tempore voluptatibus ratione quas iste quod inventore neque excepturi, reprehenderit suscipit!",
      author: "Admin",
      publishDate: "SEP 15. 2022",
      category: "Lifestyle",
    },
    {
      id: 2,
      title: "How to Train a Dog Following These 10 Simple Tips?",
      imageUrl: "./assets/img/blog/Blog2.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cupiditate exercitationem, iusto harum, aliquam vero consequatur consectetur deserunt perspiciatis tempore voluptatibus ratione quas iste quod inventore neque excepturi, reprehenderit suscipit!",
      author: "Admin",
      publishDate: "JUL 12. 2024",
      category: "Lifestyle",
    },
    {
      id: 3,
      title: "#PetRescue: Meet Fish & This Is His Story of Strength & Love",
      imageUrl: "./assets/img/blog/Blog3.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cupiditate exercitationem, iusto harum, aliquam vero consequatur consectetur deserunt perspiciatis tempore voluptatibus ratione quas iste quod inventore neque excepturi, reprehenderit suscipit!",
      author: "Owner",
      publishDate: "JAN 15. 2022",
      category: "Lifestyle",
    },
    // Add more blog entries as needed
  ];
  const formatUrl = (title) => {
    return title
      .replace(/[^a-zA-Z0-9\s]/g, "") // Remove non-alphanumeric characters except spaces
      .replace(/\s+/g, "+") // Replace spaces with '+'
      .toLowerCase(); // Convert to lowercase
  };

  return (
    <div className="blogPage">
      <section className="blog-area pt-30">
        <div className="container-fluid">
          <div className="swiper-container blog-active-3">
            <Slider {...settings} className="pb-30">
              <div className="swiper-slide">
                <div className="tpblog__single p-relative">
                  <div className="tpblog__single-img">
                    <img src="./assets/img/blog/Blog4.png" alt="" />
                  </div>
                  <div className="tpblog__single-text text-center">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <a href="shop-details.html">Lifestyle</a>
                      </span> */}
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__single-title mb-20">
                      <a href="blog-details.html">
                        Healthy Homemade Treats For Your Pet’s Festive Delight
                      </a>
                    </h4>
                    <a href="blog-details.html">Continue reading</a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__single p-relative">
                  <div className="tpblog__single-img">
                    <img src="./assets/img/blog/Blog5.png" alt="" />
                  </div>
                  <div className="tpblog__single-text text-center">
                    <div className="tpblog__entry-wap">
                      {/* <span className="cat-links">
                        <a href="shop-details.html">Lifestyle</a>
                      </span> */}
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__single-title mb-20">
                      <a href="blog-details.html">
                      Paw-some Trends: Nail Grooming for Pets
                      </a>
                    </h4>
                    <a href="blog-details.html">Continue reading</a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__single p-relative">
                  <div className="tpblog__single-img">
                    <img src="./assets/img/blog/Blog6.png" alt="" />
                  </div>
                  <div className="tpblog__single-text text-center">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Lifestyle</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__single-title mb-20">
                      <a href="blog-details.html">
                      Bulldog 101: Their Story & All You Need to Know
                      </a>
                    </h4>
                    <a href="blog-details.html">Continue reading</a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tpblog__single p-relative">
                  <div className="tpblog__single-img">
                    <img src="./assets/img/blog/Blog1.png" alt="" />
                  </div>
                  <div className="tpblog__single-text text-center">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <a href="shop-details.html">Lifestyle</a>
                      </span>
                      <span className="author-by">
                        <a href="#">Admin</a>
                      </span>
                      <span className="post-data">
                        <a href="#">SEP 15. 2022</a>
                      </span>
                    </div>
                    <h4 className="tpblog__single-title mb-20">
                      <a href="blog-details.html">
                        Popular Reasons You Must Drinks <br /> Juice Everyday
                      </a>
                    </h4>
                    <a href="blog-details.html">Continue reading</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* blog-area-start  */}
      <section className="blog-area pt-60">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-4" key={blog.id}>
                <div className="tpblog__item tpblog__item-2 mb-20">
                  <div className="tpblog__thumb fix">
                    <Link to={`/blog/${formatUrl(blog.title)}`}>
                      <img src={blog.imageUrl} alt="" />
                    </Link>
                  </div>
                  <div className="tpblog__wrapper">
                    <div className="tpblog__entry-wap">
                      <span className="cat-links">
                        <Link href="shop-details.html">{blog.category}</Link>
                      </span>
                      <span className="author-by">
                        <Link href="#">{blog.author}</Link>
                      </span>
                      <span className="post-data">
                        <Link href="#">{blog.publishDate}</Link>
                      </span>
                    </div>
                    <h4 className="tpblog__title">
                      <Link to={`/blog/${formatUrl(blog.title)}`}>
                        {blog.title}
                      </Link>
                    </h4>
                    <p>{blog.content}</p>
                    <div className="tpblog__details">
                      <Link to={`/blog/${formatUrl(blog.title)}`}>
                        Continue reading <i className="icon-chevrons-right"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="basic-pagination text-center mb-80">
                <nav>
                  <ul>
                    <li>
                      <span className="current">1</span>
                    </li>
                    <li>
                      <Link href="blog.html">2</Link>
                    </li>
                    <li>
                      <Link href="blog.html">3</Link>
                    </li>
                    <li>
                      <Link href="blog.html">
                        <i className="icon-chevrons-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-area-end  */}
    </div>
  );
};

export default Blog;

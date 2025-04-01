import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Blog() {
    const categories = ["All", "Technology", "Business", "Science"];
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [expandedArticle, setExpandedArticle] = useState(null);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8ca9bc5bdc014697a6110ddb322ab8b4")
            .then((response) => response.json())
            .then((data) => {
                if (data.articles) {
                    setArticles(data.articles);
                    setFilteredArticles(data.articles);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredArticles(articles);
        } else {
            setFilteredArticles(
                articles.filter((article) =>
                    article.title?.toLowerCase().includes(category.toLowerCase()) ||
                    article.description?.toLowerCase().includes(category.toLowerCase())
                )
            );
        }
    };

    return (
        <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded p-3 mb-4 sticky-top">
                <a className="navbar-brand fw-bold text-white" href="#">Blog</a>
                <div className="d-flex">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`btn mx-2 ${selectedCategory === category ? "btn-light" : "btn-outline-light"}`}
                            onClick={() => filterByCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="row">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                {article.urlToImage && (
                                    <img src={article.urlToImage} className="card-img-top" alt={article.title} style={{ height: "200px", objectFit: "cover" }} />
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text flex-grow-1">{article.description ? article.description.slice(0, 100) + "..." : "No description available."}</p>
                                    <button className="btn btn-primary mt-auto" onClick={() => setExpandedArticle(index)}>View More</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">No articles available.</p>
                )}
            </div>

            {expandedArticle !== null && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title">{filteredArticles[expandedArticle].title}</h5>
                                <button type="button" className="btn-close" onClick={() => setExpandedArticle(null)}></button>
                            </div>
                            <div className="modal-body">
                                {filteredArticles[expandedArticle].urlToImage && (
                                    <img
                                        src={filteredArticles[expandedArticle].urlToImage}
                                        className="img-fluid mb-3 rounded"
                                        alt={filteredArticles[expandedArticle].title}
                                    />
                                )}
                                <p>{filteredArticles[expandedArticle].content}</p>
                                <a href={filteredArticles[expandedArticle].url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                                    Read Full Article
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;

# routes/blog.py
from flask import Blueprint, jsonify

blog = Blueprint("blog", __name__)

blog_posts = [
    {
        "title": "Spice Secrets of India",
        "excerpt": "Explore the essence of Indian flavors...",
        "slug": "spice-secrets-india"
    },
    {
        "title": "Farm to Fork: Our Fresh Policy",
        "excerpt": "We ensure freshness every day...",
        "slug": "farm-to-fork"
    }
]

@blog.route("/blogs", methods=["GET"])
def get_blogs():
    return jsonify(blog_posts)

@blog.route("/blogs/<slug>", methods=["GET"])
def get_blog(slug):
    for post in blog_posts:
        if post["slug"] == slug:
            return jsonify(post)
    return jsonify({"error": "Blog not found"}), 404

# app.py
from flask import Flask
from flask_cors import CORS
from routes.ai_chat import ai_chat
from routes.reservations import reservation
from routes.blog import blog

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(ai_chat, url_prefix="/api")
app.register_blueprint(reservation, url_prefix="/api")
app.register_blueprint(blog, url_prefix="/api")

@app.route("/")
def index():
    return "Spice & Soul Backend Running!"

if __name__ == "__main__":
    app.run(debug=True)

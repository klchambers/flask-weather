from flask import Flask, render_template
import env

# creating instance of Flask
app = Flask(__name__)

# loading environment variable API_KEY from env.py
API_KEY = env.API_KEY


# defining route for index page
@app.route("/")
def index():
    return render_template("index.html")

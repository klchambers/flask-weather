from flask import Flask, render_template
import os
import env # noqa

# creating instance of Flask
app = Flask(__name__)

# loading environment variable API_KEY from env.py
API_KEY = os.getenv('API_KEY')


# defining route for index page
@app.route("/")
def index():
    return render_template("index.html")


# creatiing function to get weather data
def get_weather_data(city):
    import requests
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}" # noqa
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None

from flask import Flask, render_template, request, flash
import os
import env # noqa
import requests

# creating instance of Flask
app = Flask(__name__)

if __name__ == "__main__":
    # running debug TURN OFF in production
    app.run(debug=True)
# This is to ensure that the templates are reloaded when they are changed
app.config['TEMPLATES_AUTO_RELOAD'] = True

# loading environment variables from env.py
API_KEY = os.getenv('API_KEY')

# setting secret key for flash messages
app.secret_key = os.urandom(24)


# defining route for index page
@app.route("/")
def index():
    return render_template("index.html")


# creating function to get weather data
def get_weather_data(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}" # noqa
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return None


# TODO: create route for weather page
@app.route("/weather/", methods=["GET"])
def weather():
    city = request.args.get('city')
    data = get_weather_data(city)
    if data:
        flash("Loading weather data...")
        return render_template("weather.html", city=city, weather=data)
    else:
        flash("City not found")
        return render_template("weather.html", error="City not found")

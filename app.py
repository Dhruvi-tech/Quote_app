from flask import Flask, render_template, request, jsonify
from quotes import get_random_quote
import random

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get_quote", methods=["POST"])
def get_quote():
    data = request.get_json()
    category = data.get("category", "motivational")
    quote = get_random_quote(category)
    
    return jsonify({
        "quote": quote
    })

if __name__ == "__main__":
    app.run(debug=True)

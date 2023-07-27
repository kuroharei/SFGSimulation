from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow

app = Flask(__name__)

ma = Marshmallow(app)

@app.route('/', methods = ['GET'])
def get_graph():
    return jsonify({"Hello": "World"})

if __name__ == "__main__":
    app.run(debug=True)
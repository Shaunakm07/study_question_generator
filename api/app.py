from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow Next.js frontend to call the API

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(port=5000)

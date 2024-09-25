from flask import Flask, request, send_from_directory, send_file
    
    # set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')
    
@app.route('/models/<path:path>')
def send_model(path):
    return send_from_directory('models', path)
    
@app.route('/index.html')
def send_index():
    return send_file('index.html')
    
if __name__ == "__main__":
    app.run(debug = True)
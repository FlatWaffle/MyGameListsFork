from waitress import serve
from app1 import app

if __name__ == '__main__':
    print("Starting Waitress server...")
    print("Access the application at http://10.2.2.104:8080")
    serve(app, host='0.0.0.0', port=8080, url_scheme='http')
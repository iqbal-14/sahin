from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
    # Define the server address
    server_address = ('', 8000)  # Empty string means localhost, port 8000
    httpd = server_class(server_address, handler_class)
    print(f"Server started at http://localhost:8000")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()

if __name__ == '__main__':
    # Change to the directory containing your HTML files
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    run()

#!/usr/bin/env python3
"""
Simple HTTP Server for RegOffice Website
Serves the website on port 3090, accessible via WAN IP
"""

import http.server
import socketserver
import os

PORT = 3090
HOST = "0.0.0.0"  # Bind to all network interfaces (accessible via WAN)

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers if needed
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Custom logging format
        print(f"[{self.log_date_time_string()}] {self.address_string()} - {format % args}")

def main():
    # Change to the directory where the website files are located
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)

    # Create the server
    with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
        print(f"=" * 60)
        print(f"RegOffice Website Server Starting...")
        print(f"=" * 60)
        print(f"Server running on: http://{HOST}:{PORT}")
        print(f"Serving directory: {web_dir}")
        print(f"")
        print(f"Access the website at:")
        print(f"  - Local: http://localhost:{PORT}")
        print(f"  - WAN IP: http://<your-wan-ip>:{PORT}")
        print(f"")
        print(f"Press CTRL+C to stop the server")
        print(f"=" * 60)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n" + "=" * 60)
            print("Server stopped.")
            print("=" * 60)

if __name__ == "__main__":
    main()

from flask import Flask, request, jsonify, send_file
from pytube import YouTube
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/download-youtube', methods=['POST'])
def download_video():
    data = request.get_json()
    video_url = data.get('url')

    # some setting for user login... set the followings to true
    yt = YouTube(video_url, 
            use_oauth=False,
            allow_oauth_cache=False)
    video_stream = yt.streams.get_highest_resolution()
    video_path = r"E:\downloads\\"
    file_name = (yt.title + ".mp4").replace(" ", "_")
    video_stream.download(output_path=video_path, filename=file_name)

    # Open the file in binary mode
    with open(os.path.join(video_path, file_name), "rb") as video_file:
        video_data = video_file.read()


    return video_data, 200, {'Content-Type': 'application/octet-stream',
                            'Content-Disposition': 'attachment; filename=' + file_name}

if __name__ == '__main__':
    app.run(debug=True)

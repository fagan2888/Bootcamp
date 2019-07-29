from bottle import run, get, post, static_file
import feedparser
import json
feed = feedparser.parse("https://www.jpost.com/Rss/RssFeedsHeadlines.aspx")


@get('/get_RSS')
def parse_json():
    return feed["entries"]


@get('/')
def get_index():
    static_file("index.html", root="./static/")


if __name__ == "__main__":
    run(port=7000, host="localhost", debug=True, reloader=True)

from bottle import route, run, get, template, static_file
import urllib.request
import json


with urllib.request.urlopen("http://itc-colors.appspot.com/get_images") as url:
    data = url.read()


@route('/')
def get_index():
    return template("./static/index.html")


@get('/css/<filename:re:.*\.css>')
def get_css(filename):
    return static_file(filename, root='static/css')


@get('/js/<filename:re:.*\.js>')
def get_js(filename):
    return static_file(filename, root='static/js')


@get('/get_images')
def get_images():
    return data


if __name__ == "__main__":
    run(host="localhost", reloader=True, debug=True, port=7000)

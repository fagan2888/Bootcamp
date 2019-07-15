from bottle import route, run, static_file, get, template


@route('/')
def get_index():
    return template("./root/index.html")


@get('/css/<filename:re:.*\.css>')
def get_css(filename):
    return static_file(filename, root='root/css')


@get('/js/<filename:re:.*\.js>')
def get_js(filename):
    return static_file(filename, root='root/js')


@get('/src/img/<filename:re:.*\.jpg>')
def get_img(filename):
    return static_file(filename, root='root/src/img')


if __name__ == "__main__":
    run(host="localhost", reloader=True, port=7000, debug=True)

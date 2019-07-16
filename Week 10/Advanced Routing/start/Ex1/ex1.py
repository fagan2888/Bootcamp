from bottle import run, get, route, template, static_file, error


@get('/')
def get_index():
    return static_file("index.html", root="./static/templates/")


@error(404)
def get_not_found_page(error):
    return static_file("notFound.html", root="./static/templates/")


@get('/css/<filename:re:.*\.css>')
def get_css(filename):
    return static_file(filename, root='static/css')


if __name__ == "__main__":
    run(port=7000, reloader=True, host='localhost', debug=True)

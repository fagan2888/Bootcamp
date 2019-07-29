from bottle import run, get, jinja2_view
from functools import partial
from jinja2 import Template
counter = 0


@get('/')
def index():
    global counter
    counter = counter + 1
    template = Template('This server has been accssed  {{counter}}')
    return template.render(counter=counter)


if __name__ == "__main__":
    run(port=8000, host="localhost", debug=True, reloader=True)

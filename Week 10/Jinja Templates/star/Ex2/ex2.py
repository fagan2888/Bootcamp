from bottle import static_file, run, jinja2_view, get, request, template, post, route
from jinja2 import Template
from functools import partial
import json
view = partial(jinja2_view, template_lookup=['./static/templates'])


@get("/")
def index():
    return static_file("index.html", root="./static/templates/")


@post('/users/Add')
@view('signin.html')
def add_user_name():
    return {"first_name": request.forms.get("first_name"), "last_name": request.forms.get("last_name")}


if __name__ == "__main__":
    run(port=8000, host="localhost", reloader=True)

from bottle import get, run, template, redirect, request, post, route
import json
from pymysql import cursors, connect
from hashlib import md5
import uuid
connection = connect(
    host='localhost',
    user='root',
    password='yakir1990',
    db='users',
    charset='utf8mb4',
    cursorclass=cursors.DictCursor
)

# use hash hash decrypt authentication
@route('/')
@post('/')
def index():
    if request.method == "POST":
        return handle_login(request)
    else:
        context = {'err_msg': ""}
        return template('login.html', **context)


def handle_login(request):
    name = request.forms.get('name')
    password = request.forms.get('password')
    user_verified = verify_user(name, password)
    if user_verified:
        return template('secret.html')
    else:
        context = {'err_msg': "Wrong name or password"}
        return template('login.html', **context)


def verify_user(name, password):
    hashed_password = hash_pass(password)
    with connection.cursor() as cursor:
        sql = 'SELECT * FROM user_coockie WHERE name =%(name)s AND password=%(hashed_password)s'
        cursor.execute(sql, {"name": name, "password": hashed_password})
        result = cursor.fetchone()
        if result:
            update_user_seesion_id(name, hashed_password)
            return True
        return False


def update_user_seesion_id(name, hashed_password):
    sessionId = str()


def hash_pass(password):
    salt = "xH7dcc1"
    return md5((salt+password).encode('utf-8')).hexdigest()


if __name__ == "__main__":
    run(host="localhost", port=5000, debug=True, reloader=True)

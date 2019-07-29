from bottle import run, post, route, template, request
import json
from pymysql import cursors, connect


connection = connect(
    host='localhost',
    user='root',
    password='yakir1990',
    db='users',
    charset='utf8mb4',
    cursorclass=cursors.DictCursor
)

# use base auth
@route('/')
@post('/')
def index():
    if request.method == "POST":
        return handle_login(request)
    else:
        context = {'err_msg': ""}
        return template('login.html', **context)


def handle_login(request):
    print('hi')
    name = request.forms.get('name')
    password = request.forms.get('password')
    result = base_verify(name, password)
    if result:
        return template('secret.html')
    else:
        context = {'err_msg': "Wrong name or password"}
        return template('login.html', **context)


def base_verify(name, password):
    with connection.cursor() as cursor:
        sql = 'SELECT * FROM users WHERE name =%(name)s AND password=%(password)s'
        cursor.execute(sql, {"name": name, "password": password})
        result = cursor.fetchone()
        return result


if __name__ == "__main__":
    run(host="localhost", port=5000, debug=True, reloader=True)

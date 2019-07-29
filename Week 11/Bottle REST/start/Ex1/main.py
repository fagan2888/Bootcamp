from bottle import run, get, post, delete, request, route, template, put
from pymysql import cursors, connect
import json


connection = connect(
    host='localhost',
    user='root',
    password='yakir1990',
    db='bootcamp',
    charset='utf8mb4',
    cursorclass=cursors.DictCursor
)

# get home page
@route('/')
def index():
    return '<h1>welcome to bootcamp</h1>'

# read
@get('/students')
def get_students():
    try:
        with connection.cursor() as cursor:
            get_all_students = 'SELECT * FROM students'
            cursor.execute(get_all_students)
            result = cursor.fetchall()
            return json.dumps(result)
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@get('/students/<id:int>')
def get_student(id):
    try:
        with connection.cursor() as cursor:
            get_student_by_id = 'SELECT first_name,last_name FROM students where id = %s'
            cursor.execute(get_student_by_id, id)
            result = cursor.fetchone()
            return json.dumps(result)
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@get('/cohrts')
def get_cohrts():
    try:
        with connection.cursor() as cursor:
            get_cohrts = 'SELECT * FROM cohrts'
            cursor.execute(get_cohrts)
            result = cursor.fetchall()
            return json.dumps(result)
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@get('/cohrts/<id:int>')
def get_cohrt(id):
    try:
        with connection.cursor() as cursor:
            get_cohrt_by_chort_id = 'SELECT cohrt_name FROM cohrts WHERE cohrt_id = %(id)s'
            cursor.execute(get_cohrt_by_chort_id, {"id": id})
            result = cursor.fetchone()
            return json.dumps(result)
    except:
        return json.dumps({'error': 'something is worng with the DB'})

# update
@put('/students')
def update_student():
    try:
        with connection.cursor() as cursor:
            first_name = request.json.get('first_name')
            last_name = request.json.get('last_name')
            id = request.json.get('id')
            update_name = 'UPDATE students SET first_name = %(first_name)s, last_name =%(last_name)s WHERE id = %(id)s'
            cursor.execute(
                update_name, {"first_name": first_name, "last_name": last_name, "id": id})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@put('/cohrts')
def update_cohrt():
    try:
        with connection.cursor() as cursor:
            cohrt_id = request.json.get('cohrt_id')
            cohrt_name = request.json.get('cohrt_name')
            update_cohrt = 'UPDATE cohrts SET cohrt_name = %(cohrt_name)s WHERE cohrt_id = %(cohrt_id)s'
            cursor.execute(
                update_cohrt, {"cohrt_name": cohrt_name, "cohrt_id": cohrt_id})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})

# create
@post('/students')
def add_student():
    try:
        with connection.cursor() as cursor:
            first_name = request.json.get('first_name')
            last_name = request.json.get('last_name')
            add_student = 'INSERT INTO students (first_name,last_name) VALUES (%(first_name)s,%(last_name)s)'
            cursor.execute(
                add_student, {"first_name": first_name, "last_name": last_name})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@post('/cohrts')
def add_cohrt():
    try:
        with connection.cursor() as cursor:
            cohrt_name = request.json.get('cohrt_name')
            add_cohrt = 'INSERT INTO cohrts (cohrt_name) VALUES (%(cohrt_name)s)'
            cursor.execute(
                add_cohrt, {"cohrt_name": cohrt_name})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})

# delete
@delete('/students')
def del_student():
    try:
        with connection.cursor() as cursor:
            id = request.json.get('id')
            del_student = 'DELETE FROM students WHERE id=%(id)s'
            cursor.execute(del_student, {"id": id})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@delete('/cohrts')
def delete():
    try:
        with connection.cursor() as cursor:
            cohrt_id = request.json.get('cohrt_id')
            del_cohrt = 'DELETE FROM cohrts WHERE cohrt_id = %(cohrt_id)s'
            cursor.execute(
                del_cohrt, {"cohrt_id": cohrt_id})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


if __name__ == "__main__":
    run(host="localhost", port=5000, debug=True, reloader=True)

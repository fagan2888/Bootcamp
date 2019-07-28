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


@route('/')
def index():
    return template("welcome to bootcamp")


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
            get_student_by_id = 'SELECT first_name,last_name FROM students where id = %(id)s'
            cursor.execute(get_student_by_id, {"id": id})
            result = cursor.fetchone()
            return json.dumps(result)
    except:
        return json.dumps({'error': 'something is worng with the DB'})


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


@post('/students')
def add_student():
    try:
        with connection.cursor() as cursor:
            name = request.json.get('name')
            cohort = request.json.get('cohort')
            add_student = 'INSERT INTO students (name,cohort) VALUES (%(name)s,%(cohort)s)'
            cursor.execute(add_student, {"name": name, "cohort": cohort})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


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
            get_cohrt_by_student_id = 'SELECT cohrt_name FROM cohrts as c where c.student_id = %(id)s'
            cursor.execute(get_cohrt_by_student_id, {"id": id})
            result = cursor.fetchone()
            return json.dumps(result)
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@post('/cohrts')
def add_cohrt():
    try:
        with connection.cursor() as cursor:
            student_id = request.json.get('student_id')
            cohrt_name = request.json.get('cohrt_name')
            add_cohrt = 'INSERT INTO cohrts (student_id,cohrt_name) VALUES (%(student_id)s,%(cohrt_name)s)'
            cursor.execute(
                add_student, {"student_id": student_id, "cohrt_name": cohrt_name})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@put('/cohrts')
def update_cohrt():
    try:
        with connection.cursor() as cursor:
            student_id = request.json.get('student_id')
            cohrt_id = request.json.get('cohrt_id')
            cohrt_name = request.json.get('cohrt_name')
            update_cohrt = 'UPDATE cohrts SET cohrt_name = %(cohrt_name)s WHERE student_id = %(student_id)s and cohrt_id = %(cohrt_id)s'
            cursor.execute(
                update_cohrt, {"cohrt_name": cohrt_name, "student_id": student_id, "cohrt_id": cohrt_id})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


@delete('/cohrts')
def delete():
    try:
        with connection.cursor() as cursor:
            student_id = request.json.get('student_id')
            cohrt_id = request.json.get('cohrt_id')
            update_cohrt = 'UPDATE cohrts SET cohrt_name = null WHERE student_id = %(student_id)s and cohrt_id = %(cohrt_id)s'
            cursor.execute(
                update_cohrt, {"student_id": student_id, "cohrt_id": cohrt_id})
            connection.commit()
    except:
        return json.dumps({'error': 'something is worng with the DB'})


if __name__ == "__main__":
    run(host="localhost", port=5000, debug=True, reloader=True)

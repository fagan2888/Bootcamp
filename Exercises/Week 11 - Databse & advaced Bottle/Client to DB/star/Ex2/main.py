import pymysql.cursors
import json
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='yakir1990',
                             db='imdb',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

list_actors = [
    {
        "id": 101879,
        "full_name": "Tom Cruise",
        "Gender": "M"

    }, {
        "id": 111111,
        "full_name": "Yakir Ifrah",
        "Gender": "M"
    }, {
        "id": 770247,
        "full_name": "Bar Refali",
        "Gender": "F"
    }, {
        "id": 22222,
        "full_name": "Tom Cruise",
        "Gender": "F"
    },
    {
        "id": 33333,
        "full_name": "Yeuda Levi",
        "Gender": "M"
    }
]


def insert_actor_to_db():
    try:
        for actor in list_actors:
            if cheack_if_use_exists(actor) == False:
                with connection.cursor() as cursor:
                    sql = f'INSERT INTO actors VALUES({actor["id"]},"{actor["full_name"]}","{actor["Gender"]}")'
                    cursor.execute(sql)
                    result = cursor.fetchall()
    except:
        return json.dumps({'error': 'something is wrong with the db'})


def cheack_if_use_exists(actor):
    is_exists = False
    try:
        with connection.cursor() as cursor:
            sql = f"SELECT full_name FROM actors WHERE full_name='{actor['full_name']}' OR id={actor['id']}"
            cursor.execute(sql)
            res = cursor.fetchone()
            if res is not None:
                is_exists = True
            return is_exists
    except:
        return json.dumps({'error': 'something is wrong with the db'})


if __name__ == "__main__":
    insert_actor_to_db()

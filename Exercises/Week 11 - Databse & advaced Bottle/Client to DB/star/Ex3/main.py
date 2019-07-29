import pymysql.cursors
import json
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='yakir1990',
                             db='imdb',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)


def add_colum_db():
    try:
        with connection.cursor() as cursor:
            add_new_col = 'ALTER TABLE actors ADD num_of_movies int'
            cursor.execute(add_new_col)
    except:
        return json.dumps({'error': 'something is wrong with the db'})


def insert_value():
    try:
        with connection.cursor() as cursor:
            get_num_of_movies = "SELECT count(movie_id) as num_of_movies,actor_id FROM cast group by actor_id"
            cursor.execute(get_num_of_movies)
            num_of_movies = cursor.fetchall()
            update_actor_data = 'UPDATE actors SET num_of_movies =%(num_of_movies)s WHERE id=%(act_id)s'
            for actor in num_of_movies:
                cursor.execute(update_actor_data, {
                               'num_of_movies': actor['num_of_movies'], 'act_id': actor['actor_id']})
    except:
        return json.dumps({'error': 'something is wrong with the db'})


if __name__ == "__main__":
    add_colum_db()
    insert_value()

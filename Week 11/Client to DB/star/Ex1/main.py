import pymysql.cursors

actors = ["Richard Gere", "Julia Roberts", "Tom Cruise"]

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='yakir1990',
                             db='imdb',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)


def connect_db():
    results = []
    try:
        with connection.cursor() as cursor:
            for actor in actors:
                sql = f"SELECT full_name FROM actors WHERE full_name = '{actor}'"
                cursor.execute(sql)
                res = cursor.fetchone()
                if res is not None:
                    results.append(res)
    finally:
        connection.close()
        return results


def cheack_actors():
    res = connect_db()
    if len(res):
        print("The actors that exits in db is:")
        for actor in res:
            print(actor["full_name"])
    else:
        print("The list of actors not exits in DB")


if __name__ == "__main__":
    cheack_actors()

from bottle import route, run
import json
import random

data = [
    {
        "name": random.choice(["Yakir", "Ben", "Sapir", "Moshe", "Sara"]),
        "age":   random.randint(20, 40)

    },
    {
        "name": random.choice(["Yakir", "Ben", "Sapir", "Moshe", "Sara"]),
        "age":   random.randint(20, 40)
    },
    {
        "name": random.choice(["Yakir", "Ben", "Sapir", "Moshe", "Sara"]),
        "age":   random.randint(20, 40)
    },
    {
        "name": random.choice(["Yakir", "Ben", "Sapir", "Moshe", "Sara"]),
        "age":   random.randint(20, 40)
    }
]


@route('/')
def get_data():
    return json.dumps(random.choice(data))


if __name__ == "__main__":
    run(host="localhost", port=7000, reloader=True)

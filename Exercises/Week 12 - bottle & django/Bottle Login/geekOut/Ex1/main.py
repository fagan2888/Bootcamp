# hash decrypt for authentication
@route('/')
@post('/')
def index():
    if request.method == "POST":
        return handle_login(request)
    else:
        context = {'err_msg': ""}
        return template('login.html', **context)


# def my_secret():
#     if user_is_logged_in(request):
#         return template('secret.html')
#     else:
#         template('login.html')


def user_is_logged_in(request):
    name_from_cookie = request.get_cookie('name')
    session_id_from_cookie = request.get_cookie('session_id')
    with connection.cursor() as cursor:
        sql = 'SELECT * FROM user '


def handle_login():
    name = request.json.get('name')
    password = request.json.get('password')
    user_verified = verify_user(name, password)


def verify_user(name, password):
    hashed_password = hash_pass(password)


def hash_pass(password):
    salt = 'xH7dcc1'
    return md5((salt+password).encode('utf-8')).hexdigest()


@get('/login')
def login():
    pass

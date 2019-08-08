from django.conf.urls import url, include
from . import views
from django.contrib.auth.views import login, logout

urlpatterns = [
    # ex: /SocialBoard/
    url(r'^board/register', views.register, name='register'),
    url(r'^board/post/add', views.add_new_post, name='add_new_post'),
    url(r'^board/post', views.post, name='post'),
    url(r'^$', login, name='login'),

]

from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.views import login, logout
from . import views
urlpatterns = [
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout, kwargs={'next_page': '/SocialBoard'},
        name='logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^post/$', views.some_view, name='some_view'),
    url(r'^$', views.index, name='index')
]

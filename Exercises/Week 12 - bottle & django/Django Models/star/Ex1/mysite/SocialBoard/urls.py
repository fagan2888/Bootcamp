from django.conf.urls import url
from . import views


urlpatterns = [
    # ex: /SocialBoard/
    url(r'^$', views.index, name='index')
]

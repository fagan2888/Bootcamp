from django.db import models

# Create your models here.

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    publish_date = models.DateTimeField('date published')
    content = models.CharField(max_length=500)
    author = models.CharField(max_length=24)

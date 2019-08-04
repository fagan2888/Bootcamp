from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Post

# Create your views here.


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            login(request, new_user)
            posts = Post.objects.all()
            context = {'posts': posts}
        return render(request, "SocialBoard/post.html", context)
    else:
        form = UserCreationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
def some_view(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, "SocialBoard/post.html", context)


def index(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, "SocialBoard/index.html", context)

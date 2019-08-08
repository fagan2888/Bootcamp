from django.shortcuts import render, HttpResponse
from .models import Post
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.utils import timezone


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
def post(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, "SocialBoard/post.html", context)


@require_http_methods(['POST'])
def add_new_post(request):
    # try:
    data = json.loads(request.body)
    print(data["title"])
    new_post = Post(
        title=data["title"],
        publish_date=timezone.now(),
        author=data["author"],
        content=data["text"])
    new_post.save()
    return JsonResponse(model_to_dict(new_post), status=201)

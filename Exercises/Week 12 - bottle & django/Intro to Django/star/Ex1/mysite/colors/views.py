from django.shortcuts import render
from django.http import HttpResponse
import json
# Create your views here.
colors = ["blue", "brown", "green", "white", "black"]


def index(request):
    return render(request, "colors/home_page.html")


def list(request):
    colors_json = json.dumps(colors)
    return HttpResponse(colors_json)

# ask Matan


def add_color(request):
    new_color = request.GET.get('color', '')
    if new_color in colors:
        msg = {' The color is already exists'}
        return HttpResponse(msg, status=409)
    else:
        colors.append(new_color)
        msg = {'new color added'}
        return HttpResponse(msg, status=201)


def get_color(request):
    color = request.GET.get('color', '')
    if color in colors:
        return HttpResponse(color, status=200)
    else:
        msg = {'no such color'}
        return HttpResponse(msg, status=404)

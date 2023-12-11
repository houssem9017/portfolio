from django.shortcuts import render
from apps.main.models import Skill


def index(request):
    return render(request, 'main/index.html', {"skills": Skill.objects.all()})

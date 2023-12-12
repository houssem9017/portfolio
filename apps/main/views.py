from django.shortcuts import render
from apps.main.models import Skill
from apps.portfolio_app.models import Portfolio


def index(request):
    return render(request, 'main/index.html', {"skills": Skill.objects.all(),
                                               "portfolio": Portfolio.objects.all()})

from django.shortcuts import render
from apps.main.models import Skill
from apps.portfolio_app.models import Portfolio
from django.core.serializers import deserialize


def index(request):
    with open('skills.json', 'r') as file:
        json_data = file.read()
    skills_data = [obj.object for obj in deserialize('json', json_data)]
    with open('portfolio.json', 'r') as file2:
        json_data2 = file2.read()
    portfolio_data = [obj.object for obj in deserialize('json', json_data2)]
    print(portfolio_data[0].title)
    return render(request, 'main/index.html', {"skills": skills_data,
                                               "portfolio": portfolio_data})

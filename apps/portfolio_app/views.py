from django.core.serializers import deserialize
from django.shortcuts import render

from apps.portfolio_app.models import Portfolio


def portfolio_details(request, id):
    with open('portfolio.json', 'r') as file2:
        json_data2 = file2.read()
    item = [obj.object for obj in deserialize('json', json_data2) if obj.object.id == id][0]
    return render(request, 'portfolio_app/portfolio-details.html', {"item": item})

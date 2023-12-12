from django.shortcuts import render

from apps.portfolio_app.models import Portfolio


def portfolio_details(request, id):
    item = Portfolio.objects.get(id=id)
    return render(request, 'portfolio_app/portfolio-details.html', {"item": item})

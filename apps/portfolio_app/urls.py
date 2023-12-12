from django.urls import path
from . import views

urlpatterns = [
    path('portfolio_details/<int:id>', views.portfolio_details, name='portfolio_details'),
]
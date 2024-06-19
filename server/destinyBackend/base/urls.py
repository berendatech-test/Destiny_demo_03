from django.urls import path
from . import views

urlpatterns = [
    path("blogs/", views.BlogApiView.as_view(), name="blog_api_view"),
    path("blogs/<int:pk>", views.DetailedBlogApiView.as_view(), name="detailed_blog_api_view"),
]
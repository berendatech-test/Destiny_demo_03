from django.shortcuts import render
from rest_framework import generics
from .models import Blog
from .serializers import BlogSerializer
# Create your views here.





class BlogApiView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class DetailedBlogApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
from django.shortcuts import render

from django.shortcuts import render
from django.http import HttpResponse , HttpResponseRedirect
from django.core.exceptions import ValidationError

from django.http.response import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from blog.serializers import *
# from blog.models import *

class Index(APIView):

    def get(self, request):

        global posts
        posts = []


        for i in BlogPost.objects.all():
            posts.append(i)
            print(i.date)


        return render(
            request,
            '../templates/Modified_files/index1.html',
            {
                "BlogPosts" : posts[-3:]

            }
        )

class BlogView(APIView):

    def get(self, request):

        global posts
        posts = []


        for i in BlogPost.objects.all():
            posts.append(i)
            print(i.date)
        posts = posts[::-1]
        return render(
            request,
            '../templates/Modified_files/blog.html',
            {
                "BlogPosts" : posts,

            }
        )


class AdminPanelMain(APIView):

    def get(self , request):

        if HttpResponse.status_code == 200:
            return render(
                request,
                '../templates/Modified_files/adminpanel.html',
            )
        else:
            return render(
                request,
                '../templates/Modified_files/error.html',
                {
                    "httperrorvar" : HttpResponse.status_code
                }
            )

    def post(self, request):
        serializer = RequestBlogpostSerializer(data=request.data)
        if serializer.is_valid():
            u = serializer
            u.save()
            return render(
                request,
                '../templates/Modified_files/blog.html',
                    {
                        "post_text" : request.data["text"]
                    }
                    )
        else:
            return render(
                request,
                '../templates/Modified_files/error.html',
                {
                    "httperrorvar": HttpResponse.status_code
                }
            )


class BlogDetail(APIView):

    def get(self, request, post_title):
        for i in BlogPost.objects.all():
            print(i.id)
        try:
            requested_post = BlogPost.objects.get(id=post_title)
            print(requested_post)
            return render(
                request,
                '../templates/Modified_files/blog-detail.html',
                {
                    "details": requested_post
                }
            )
        except BlogPost.DoesNotExist:
            return render(
                request,
                '../templates/Modified_files/error.html',
                {
                    "httperrorvar": HttpResponse.status_code
                }
            )


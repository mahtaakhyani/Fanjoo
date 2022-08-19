from django.shortcuts import render


from django.shortcuts import render
from django.http import HttpResponse , HttpResponseRedirect
from django.core.exceptions import ValidationError
from django.views.decorators.csrf import csrf_protect


from django.http.response import JsonResponse
from django.contrib.auth import login , logout , authenticate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from django.contrib.auth.decorators import user_passes_test
from django.utils import timezone



from user.serializers import *
import requests
# from zarinpal.views import *
# print(description)

class AccountMainLogin(APIView):

    def get(self,request, redirect_num=0):

        if HttpResponse.status_code == 403:
            return render(
            request,
            '../templates/Modified_files/error.html',
                {
                    "httperrorvar" : HttpResponse.status_code
                }
        )
        logout(request)
        if HttpResponse.status_code == 200:

            if redirect_num == 2:
                return render(
                    request,
                    '../templates/Modified_files/login.html',
                    {
                        "redirect_num" : redirect_num
                    }
                )
            else:
                return render(
                    request,
                    '../templates/Modified_files/login.html'  # main page of registration
                    , status=status.HTTP_200_OK
                )
        else:
            return render(
                request,
                '../templates/Modified_files/error.html',
                {
                    "httperrorvar" : HttpResponse.status_code
                }
            )


    def post(self , request):
        user = authenticate(request, username=request.data['username'], password=request.data['password'])
        if user is not None:
            login(request, user)
            if user.is_superuser:
                if HttpResponse.status_code == 200:
                    return HttpResponseRedirect('/admin_panel')
                else:
                    return render(
                        request,
                        '../templates/Modified_files/error.html',
                        {
                            "httperrorvar": HttpResponse.status_code
                        }
                    )
            else:
                if HttpResponse.status_code == 200:
                    return HttpResponseRedirect('/panel')
                else:
                    return render(
                        request,
                        '../templates/Modified_files/error.html',
                        {
                            "httperrorvar": HttpResponse.status_code
                        }
                    )

        else:
            status = 401
            return render(
                request,
                '../templates/Modified_files/error.html',
                {
                    "httperrorvar": status,
                    "url": "fanjou.ir/account"
                }
            )

class AccountMainRegister(APIView):

    def post(self , request):
        logout(request)
        serializer = RequestRegisterSerializer(data=request.data)
        if serializer.is_valid():
            u = serializer
            u.save()
            user = CustomUser.objects.get(username = request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            print(user)
            login(request , user)
            return HttpResponseRedirect('/panel')
        else:
            print(serializer.errors),
            return render(
                request,
                '../templates/Modified_files/error.html',
                {
                    "httperrorvar": status,
                    "url": "fanjou.ir/account"
                }
            )

class TestResultClass(APIView):
    @csrf_protect

    def get(self, request):
        return render(
            request,
            '../templates/Modified_files/error.html',
            {
                "httperrorvar": 403
            }
        )

    def post(self, request):
        serializer = RequestResultSerializer(data=request.data)
        if serializer.is_valid():
            u = serializer
            u.save()
            return render(
                request,
                '../templates/Modified_files/blog.html'
                , status=status.HTTP_200_OK
            )
        else:
            print(serializer.errors),
            return render(
                request,
                '../templates/Modified_files/error.html'
                , status=status.HTTP_200_OK

            )



def career(request , num):
	context={}
	return render(request , '../templates/Modified_files/it_careerAndSkill.html' , context)



    # def put(self, request):
    #     print('سلامممممممممممم')
    #     serializer = RequestRegisterSerializer(data=request.data)
    #     if serializer.is_valid():
    #         response = Response(
    #             serializer.errors,
    #             status=HttpResponse.status_code
    #         )
    #         user = CustomUser.objects.get(username=request.data['username'])
    #         if len(user) == 0:
    #             u = serializer
    #             u.save()
    #             print(user)
    #             login(request, user)
    #             print(request.user)
    #
    #             return render(request, '../templates/Modified_files/it_blog.html')
    #     # print(Session.objects.filter(expire_date__gte=timezone.now()) )
    #     # print(request.user)
    #     # u = CustomUser.objects.filter(username=request.user.username)
    #     # # print(u,u.values('phonenum'))
    #     # u.delete()
    #     # print(CustomUser.objects.filter(username=request.user.username))
    #     # return Response(
    #     #          status=status.HTTP_200_OK
    #     #     )




# class RegisterFieldsForeign(APIView):
#     def get(self,request):
#         return Response(
#             '{page : main page}'# main page of registration
#             , status=status.HTTP_200_OK
#         )
#
#
#
#     def post(self , request):
#         serializer = RequestRegisterSerializerForeign(data=request.data)
#         # print(3)
#         if serializer.is_valid():
#             response = HttpResponse(
#                     serializer.errors,
#                     {
#                         'page' : 'pay page',
#
#                     },status = HttpResponse.status_code
#             )
#             u = serializer
#             u.save()
#             return response
#         else:
#             print(serializer.errors),
#             return Response(
#                 serializer.errors,
#                 status=status.HTTP_400_BAD_REQUEST
#             )
#
#     def put(self, request):
#         # print(Session.objects.filter(expire_date__gte=timezone.now()) )
#         # print(request.user)
#         u = CustomUser.objects.filter(username=request.user.username)
#         u.delete()
#         # print(CustomUser.objects.filter(username=request.user.username))
#         return Response(
#                  status=status.HTTP_200_OK
#             )


# class SuccessfulRegistration(APIView):
#     def user_informing(self , userdata):
#
#         API_Key = '39506F6B44424C352B73314F41656A5244386C656342614D77453539367343494C7A62745A794D793833413D' #kavenegar api key
#         url = 'https://api.kavenegar.com/v1/%s/sms/send.json' %API_Key #kavenegar user url
#         inform_data = {
#             'receptor' : userdata ,
#             'message': 'You have registered for pycon 2020 successfuly'
#         }
#
#         response = requests.post(url , data = inform_data)
#         return response
#
#
#
#     def get(self, request):
#         if vrfStatus == 100 :
#             activated_user = CustomUser.objects.filter(username='mahta')#request.user.username)
#             activated_user.update( activate = True)
#             userpohonenum = request.user.phonenum
#             self.user_informing(userpohonenum)
#         print(userpohonenum)
#
#         return Response(
#
#                 {
#                     'response' : 'registration completed successfuly',
#                     'status' : '200'	,
#                     'page' : 'landing' # landing page
#                 }, status = status.HTTP_200_OK
#             )
#
#
#
#
#
#
#
#
#
#
#

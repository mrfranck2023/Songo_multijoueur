from django.contrib import admin
from django.urls import path
from songo import views
from accounts.views import Signup, Logout, Login

urlpatterns = [
path('admin/', admin.site.urls),
path('hello', views.hello, name="hello"),
path('about-us/', views.about, name="update"),
path('signup', Signup, name='inscription'),
path('logout', Logout, name='deconnexion'),
path('login', Login, name='connexion'),
path('getelements', views.getelements, name="getelements"),
]
from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model, login, logout, authenticate
from songo.models import Presence, points, Score
from accounts.models import Internaute

user = get_user_model()

def Signup(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        User = user.objects.create_user(username=username, password=password)

        login(request, User)
        utilisateur = request.user
        presence = Presence.objects.create(presence=1,  nom=utilisateur.username)

        presence.save()
        return redirect('update')

    return render(request, 'accounts/signup.html')

def Logout(request):
    utilisateur = request.user
    if(utilisateur.username != "francky"):
        supPresence = Presence.objects.all()
        supPresence[0].delete()
        score = Score.objects.all()
        score.delete()
        ptn = points.objects.all()
        ptn.delete()
    logout(request)
    return redirect('update')

def Login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

     
      
        user = authenticate(username=username, password=password)
        utilisateur = request.user
        if user:
            login(request, user)
            if(utilisateur.username != "francky"):
          
                presence = Presence.objects.create(presence=1, nom=utilisateur.username)
                presence.save()

                lespresents = Presence.objects.all()
                nbrconnecte = len(lespresents)
                if nbrconnecte == 2:
                    score = Score.objects.create(scorej1 = 0, scorej2 = 0)
                    score.save()
                    p1 = points.objects.create(point1=5,point2=5, point3=5, point4=5, point5=5, point6=5, point7=5, point8=5, point9=5, point10=5, point11=5, point12=5, point13=5, point14=5)
                    p1.save()                  



                
            return redirect('update')
        


    return render(request, 'accounts/login.html')

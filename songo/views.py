from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from songo.models import points, Presence, Score


def hello(request):
    suppressionPoints = points.objects.all()
    suppressionPoints.delete()

    suppressionScore = Score.objects.all()
    suppressionScore.delete()
    
    laValp1 = request.POST['ptns1']
    laValp2 = request.POST['ptns2']
    laValp3 = request.POST['ptns3']
    laValp4 = request.POST['ptns4']
    laValp5 = request.POST['ptns5']
    laValp6 = request.POST['ptns6']
    laValp7 = request.POST['ptns7']
    laValp8 = request.POST['ptns8']
    laValp9 = request.POST['ptns9']
    laValp10 = request.POST['ptns10']
    laValp11 = request.POST['ptns11']
    laValp12 = request.POST['ptns12']
    laValp13 = request.POST['ptns13']
    laValp14 = request.POST['ptns14']
    laValsc1 = request.POST['score1']
    laValsc2 = request.POST['score2']

    point = points.objects.create(point1=laValp1, point2=laValp2, point3=laValp3, point4=laValp4, point5=laValp5, point6=laValp6, point7=laValp7, point8=laValp8, point9=laValp9, point10=laValp10, point11=laValp11, point12=laValp12, point13=laValp13, point14=laValp14)
    point.save()

    sCore = Score.objects.create(scorej1=laValsc1, scorej2=laValsc2)
    sCore.save()
    return HttpResponse('Message sent successfully')


def about(request):

    lespresents = Presence.objects.all()
    nbrconnecte = len(lespresents)

    context = {
        'nbrconnecte': nbrconnecte,
        'players': lespresents
        # 'tontines': Tontine.objects.all(),
        # 'member': Membre.objects.all(),
        # 'rec_membre': recmembre,
        # 'rec_apptontine': attendtontine,
        # 'recton': recton
    }
    return render(request, 'songo/update.html', context)

    # ptnt =  points.objects.select_for_update()
    # ptnt[0].name = 20
    # ptnt.save()
    
    # return HttpResponse('<h1>A propos de nous</h1>')
    # obj = points.objects.get(id=1)

    # form = PointForm(request.POST, instance=obj)
   
    # print(request.POST)
    # if form.is_valid():
    #     form.save()
    #     return HttpResponse('<h1>Hello Django!</h1>')
    # return render(request, 'songo/update.html')

def getelements(request):
    marks = points.objects.all()

    scores = Score.objects.all()
    return JsonResponse({"lesPoints":list(marks.values()), "lesScores":list(scores.values())})
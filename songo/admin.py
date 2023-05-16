from django.contrib import admin

from songo.models import points, Presence, Tour, Score

admin.site.register(points)
admin.site.register(Presence)
admin.site.register(Tour)
admin.site.register(Score)
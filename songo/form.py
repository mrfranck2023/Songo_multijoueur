from django.forms import ModelForm
from songo.models import points

# Create the form class.
class PointForm(ModelForm):
    class Meta:
        model = points
        fields = ["point1"]

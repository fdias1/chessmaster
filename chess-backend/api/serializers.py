from rest_framework import serializers
from .models import ChessPiece

class ChessPieceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChessPiece
        fields = '__all__'
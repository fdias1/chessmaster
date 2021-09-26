from django.db import models

# Create your models here.
class ChessPiece(models.Model):
    CHESS_PIECE_TYPES = [
        ('pawn', 'Pawn'),
        ('rook', 'Rook'),
        ('knight', 'Knight'),
        ('bishop', 'Bishop'),
        ('queen', 'Queen'),
        ('king', 'King'),
    ]
    CHESS_PIECE_COLORS = [
        ('l', 'Light'),
        ('d', 'Dark'),
    ]

    type = models.CharField(max_length=10, choices=CHESS_PIECE_TYPES)
    color = models.CharField(max_length=1, choices=CHESS_PIECE_COLORS, default='l')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__ (self):
        return '[' + self.type + ' (' + self.coordinates + ')]'
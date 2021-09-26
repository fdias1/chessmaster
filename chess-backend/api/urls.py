from django.urls import include
from django.urls import path
from .views import ChessPieceViewSet, ChessPieceMovements
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('chesspiece', ChessPieceViewSet, 'chesspiece')


urlpatterns = [
    path('position/<int:pk>/<str:chess_pos>', ChessPieceMovements.as_view()),
    path('', include(router.urls)),
    path('<int:pk>', include(router.urls)),
]